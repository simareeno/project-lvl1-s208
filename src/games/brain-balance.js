import { cons } from 'hexlet-pairs';
import { welcomeUser, game, getRandomNumber, getBalancedNumber } from '..';

export const brainBalance = () => {
  const ROUNDS = 3;
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';
  const user = welcomeUser(welcomeMessage);

  const questions = () => {
    const questionsArray = [];
    for (let i = 0; i < ROUNDS; i += 1) {
      const question = getRandomNumber(100, 10000);
      const correctAnswer = getBalancedNumber(question);
      questionsArray.push(cons(question, correctAnswer));
    }
    return questionsArray;
  };

  game(user, questions());
};

export default brainBalance;
