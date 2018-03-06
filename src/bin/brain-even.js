#!/usr/bin/env node

import { greetingText, getUserName, playGame, evenOddGame } from '..';

const howToAnswer = 'Answer "yes" if number even otherwise answer "no".\n';

console.log(greetingText);
console.log(howToAnswer);

const userName = getUserName();
console.log(`Hello, ${userName}\n`);

const gameResult = playGame(userName, evenOddGame, 3);
console.log(gameResult);

