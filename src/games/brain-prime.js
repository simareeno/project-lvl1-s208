import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber } from '../utils';

const welcomeMessage = 'Find the greatest common divisor of given numbers.';
const questionMessage = 'Is this number prime?';

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export const brainPrime = () => {
  const getQuestion = () => {
    const number = getRandomNumber(1, 100);
    const question = number;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion, questionMessage);
};

export default brainPrime;
