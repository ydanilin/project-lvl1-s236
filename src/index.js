
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


// Game engine
/**
 * invoked by gameDialog
 * the engine expects that gameFunction
 * must return cons(<number or string>, <correct answer string>)
 * for example: cons(7, 'no') of cons('5 + 2', '7')
 */

const gameEngine = (gameFunction, numRounds, cRound = 0) => {
  if (cRound === numRounds) {
    return true;
  }
  const gameCase = gameFunction();
  console.log(`Question: ${car(gameCase)}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = cdr(gameCase);
  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
    return false;
  }
  console.log('Correct!');
  return gameEngine(gameFunction, numRounds, cRound + 1);
};


// Game dialog
/**
 * the user of this default function is a game file (which realizes game logic)
 * this function is like bootstrap, which shows welcome message,
 * asks user name, invokes the game engine and terminates the story
 */
export default (howToAnswer, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${howToAnswer}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  // game invocation
  const gameWin = gameEngine(gameFunction, 3);
  if (gameWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
