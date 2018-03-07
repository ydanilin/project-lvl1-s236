#!/usr/bin/env node

import { greetingText, getUserName, playGame, calculatorGame } from '..';

const howToAnswer = 'What is the result of the expression?\n';

console.log(greetingText);
console.log(howToAnswer);

const userName = getUserName();
console.log(`Hello, ${userName}\n`);

const gameResult = playGame(userName, calculatorGame, 3);
console.log(gameResult);

