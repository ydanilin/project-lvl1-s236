
import { cons } from 'hexlet-pairs';
import gameDialog from '..';
import { gRandom, isPrime } from '../utils';


const maxGeneratedValue = 90;
const howToAnswer = 'Find the greatest common divisor of given numbers.';


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
