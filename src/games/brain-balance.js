import { cons } from 'hexlet-pairs';
import { game, getRandomNumber, getBalancedNumber } from '..';

export const brainBalance = () => {
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';

  const getQuestion = () => {
    const question = getRandomNumber(100, 10000);
    const correctAnswer = getBalancedNumber(question);
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainBalance;
