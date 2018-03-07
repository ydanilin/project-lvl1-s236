
import { cons } from 'hexlet-pairs';
import { gRandom } from '..';

// Even odd game
const evenOddGame = () => {
  const askedNumber = gRandom();
  let answer = '';
  if (askedNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return cons(askedNumber, answer);
};

export default evenOddGame;

