
import { l, cons, reverse, reduce, head, tail } from 'hexlet-pairs-data';
import { cons as tupleCons } from 'hexlet-pairs';
import gameDialog from '..';
import gRandom from '../utils';


const iterList = (list, index, acc = 0) => {
  // no list boundary checking
  if (acc === index) {
    return head(list);
  }
  return iterList(tail(list), index, acc + 1);
};


const makeProgression = (start, pDelta, pLength) => {
  const makeProgressionChain = (list, len, delta, step, iter = 0) => {
    if (iter === len) {
      return list;
    }
    const next = step + delta;
    return makeProgressionChain(cons(next, list), len, delta, next, iter + 1);
  };

  return reverse(makeProgressionChain(l(), pLength, pDelta, start - 1));
};


const chainLength = 10;
const maxStartValue = 46; // First member of the progression
const minStartValue = 5;
const maxDeltaValue = 17;
const minDeltaValue = 4;

const howToAnswer = 'What number is missing in this progression?';

// gameFunction
const gameFunction = () => {
  const start = gRandom(maxStartValue, minStartValue);
  const delta = gRandom(maxDeltaValue, minDeltaValue);
  const prgsNumList = makeProgression(start, delta, chainLength);
  const holePlace = gRandom(chainLength - 1, 0);
  const ans = iterList(prgsNumList, holePlace);
  const strResult = reduce(
    (val, acc) => (val === ans ? `${acc} ..` : `${acc} ${val}`),
    '',
    prgsNumList,
  );
  return tupleCons(strResult, `${ans}`);
};

// Game bootstrap
export default () => gameDialog(howToAnswer, gameFunction);
