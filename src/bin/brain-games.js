#!/usr/bin/env node

import { greetingText, getUserName } from '..';

console.log(greetingText);
const name = getUserName();
console.log(`Hello, ${name}`);

