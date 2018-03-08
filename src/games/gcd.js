
import { cons } from 'hexlet-pairs';
import gameDialog from '..';
import gRandom from '../utils';


const maxGeneratedValue = 90;
const howToAnswer = 'Find the greatest common divisor of given numbers.';


const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};


const nonPrimeRandom = () => {
  const x = gRandom(maxGeneratedValue, 1);
  if (!isPrime(x)) {
    return x;
  }
  return nonPrimeRandom();
};


const gcd = (x, y) => {
  if (!y) return x;
  return gcd(y, x % y);
};


// gameFunction
const gameFunction = () => {
  const a = nonPrimeRandom();
  const b = nonPrimeRandom();
  const result = gcd(a, b);
  return cons(`${a} ${b}`, `${result}`);
};

// Game bootstrap
export default () => gameDialog(howToAnswer, gameFunction);
