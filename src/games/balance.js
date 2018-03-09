
import { l, cons, reverse, toString, reduce } from 'hexlet-pairs-data';
import { cons as tupleCons } from 'hexlet-pairs';
import gameDialog from '..';
import gRandom from '../utils';


const makeBalList = (high, amtHigh, targetLen) => {
  const makeBalListRev = (list, iter = 1) => {
    if (iter > targetLen) {
      return list;
    }
    if (iter <= amtHigh) {
      return makeBalListRev(cons(high, list), iter + 1);
    }
    return makeBalListRev(cons(high - 1, list), iter + 1);
  };

  return reverse(makeBalListRev(l()));
};


const maxGeneratedValue = 9999;
const minGeneratedValue = 100;
const howToAnswer = 'Balance the given number.';

// gameFunction
const gameFunction = () => {
  const a = gRandom(maxGeneratedValue, minGeneratedValue);
  const stri = String(a);
  const targetLen = stri.length;
  const digitList = stri.split('').map(x => Number(x));
  const total = digitList.reduce((acc, value) => acc + value, 0);
  const high = Math.floor(total / targetLen) + 1;
  const amtHigh = total % targetLen;

  const li = makeBalList(high, amtHigh, targetLen);
  const strResult = reduce((acc, val) => acc + String(val), '', li);
  return tupleCons(`${a}`, strResult);
};

// Game bootstrap
export default () => gameDialog(howToAnswer, gameFunction);
