
// Parties description

// Game bootstrap
/**
 * export default () =>
 * function to be invoked from binary
 * it calls gameDialog from index.js, which
 * 1. Outputs greetings, hints, asks for username
 * 2. Plays game - invokes gameEngine (also in index.js) which reads user
 *    answers, show correctness and provides outcome (win/lost)
 * 3. Shows the user the end result of the game
 * 4. Terminate the story
 */

// gameFunction
/**
 * The essence of the game -
 * provudes a tuple
 * cons(<question text>, <correct answer text>)
 */

// howToAnswer
// text like 'Answer "yes" if number even otherwise answer "no".'

// see index.js for gameDialog and gameEngine description


import { cons } from 'hexlet-pairs';
import gameDialog from '..';
import { gRandom } from '../utils';


const howToAnswer = 'Answer "yes" if number even otherwise answer "no"';

// gameFunction
const gameFunction = () => {
  const askedNumber = gRandom();
  let answer = '';
  if (askedNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return cons(askedNumber, answer);
};

// Game bootstrap
export default () => gameDialog(howToAnswer, gameFunction);
