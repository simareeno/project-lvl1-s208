import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber } from '../utils';

const welcomeMessage = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const brainGcd = () => {
  const getQuestion = () => {
    const numbersPair = cons(getRandomNumber(10, 100), getRandomNumber(10, 100));
    const question = `${car(numbersPair)} ${cdr(numbersPair)}`;
    const correctAnswer = gcd(car(numbersPair), cdr(numbersPair));
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainGcd;
