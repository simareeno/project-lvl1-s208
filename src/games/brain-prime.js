import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber } from '../utils';

const welcomeMessage = 'Find the greatest common divisor of given numbers.';
const questionMessage = 'Is this number prime?';

export const isPrime = (num) => {
  if (num < 1) return false;
  if (num === 1) return true;
  const primeRecursion = (numberToCheck) => {
    if (numberToCheck === num) return true;
    if (num % numberToCheck === 0) return false;
    return primeRecursion(numberToCheck + 1);
  };
  return primeRecursion(2);
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
