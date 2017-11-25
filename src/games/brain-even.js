import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber } from '../utils';

const welcomeMessage = 'Answer "yes" if number even otherwise answer "no".';

export const brainEven = () => {
  const getQuestion = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainEven;
