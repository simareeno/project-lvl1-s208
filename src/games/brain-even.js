import { cons } from 'hexlet-pairs';
import { welcomeUser, game, getRandomNumber } from '..';

export const brainEven = () => {
  const ROUNDS = 3;
  const user = welcomeUser();

  const questions = () => {
    const questionsArray = [];
    for (let i = 0; i < ROUNDS; i += 1) {
      const question = getRandomNumber(1, 100);
      const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
      questionsArray.push(cons(question, correctAnswer));
    }
    return questionsArray;
  };

  game(user, questions());
};

export default brainEven;
