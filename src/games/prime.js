
import { cons as tupleCons } from 'hexlet-pairs';
import gameDialog from '..';
import { gRandom, isPrime } from '../utils';


const maxValue = 146;
const minValue = 1;
const howToAnswer = 'Is this number prime?';


// gameFunction
const gameFunction = () => {
  const n = gRandom(maxValue, minValue);
  let ans;
  if (isPrime(n)) {
    ans = 'yes';
  } else {
    ans = 'no';
  }
  return tupleCons(`${n}`, ans);
};

// Game bootstrap
export default () => gameDialog(howToAnswer, gameFunction);
