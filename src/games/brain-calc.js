import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber, getRandomSign, sum, sub, mul } from '../utils';

const welcomeMessage = 'What is the result of the expression?';

export const brainCalc = () => {
  const getQuestion = () => {
    const numbersPair = cons(getRandomNumber(1, 15), getRandomNumber(1, 15));
    const sign = getRandomSign();
    const question = `${car(numbersPair)} ${sign} ${cdr(numbersPair)}`;
    let correctAnswer = Number;
    if (sign === '+') correctAnswer = sum(numbersPair);
    if (sign === '-') correctAnswer = sub(numbersPair);
    if (sign === '-') correctAnswer = mul(numbersPair);
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainCalc;
