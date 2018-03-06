
import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const greetingText = 'Welcome to Brain Games!';

const getUserName = () => readlineSync.question('May I have your name? ');

// Internal functions
const random = (num = 900) => Math.floor(Math.random() * num); // Random number from 0 to 900

// Even odd game itself
const evenOddGame = () => {
  const askedNumber = random();
  let answer = '';
  if (askedNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return cons(askedNumber, answer);
};

// Game engine
// Plug in desired game as a function
// (playFunction parameter)
// The plugged function must return cons(<number>, <correct answer string>)
// for example: cons(7, 'no') of cons(16, 'yes')
const playGame = (userName, playFunction, numRounds, cRound = 0) => {
  if (cRound === numRounds) {
    return `Congratulations, ${userName}`;
  }
  const gameCase = playFunction();
  console.log(`Question: ${car(gameCase)}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = cdr(gameCase);
  if (answer !== correct) {
    return `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${userName}!`;
  }
  console.log('Correct!');
  return playGame(userName, playFunction, numRounds, cRound + 1);
};


export { greetingText, getUserName, playGame, evenOddGame };
