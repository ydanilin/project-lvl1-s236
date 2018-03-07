
import { cons } from 'hexlet-pairs';
import { gRandom } from '..';

const maxGeneratedValue = 146;

// Even odd game
const calculatorGame = () => {
  const operations = [
    {
      sign: '+',
      func: (x, y) => x + y,
    },
    {
      sign: '-',
      func: (x, y) => x - y,
    },
    {
      sign: '*',
      func: (x, y) => x * y,
    },
  ];
  const a = gRandom(maxGeneratedValue);
  const b = gRandom(maxGeneratedValue);
  const chOp = operations[gRandom(2)];
  const { sign } = chOp;
  const result = chOp.func(a, b);
  return cons(`${a} ${sign} ${b}`, `${result}`);
};

export default calculatorGame;

