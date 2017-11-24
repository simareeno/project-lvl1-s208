import { cons } from 'hexlet-pairs';
import { game, getRandomNumber } from '..';

export const brainEven = () => {
  const welcomeMessage = 'Answer "yes" if number even otherwise answer "no".';

  const getQuestion = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainEven;
