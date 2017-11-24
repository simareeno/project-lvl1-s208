import { cons, car, cdr } from 'hexlet-pairs';
import { game, getRandomNumber, sum, sub, mul } from '..';

export const brainCalc = () => {
  const welcomeMessage = 'What is the result of the expression?';

  const getQuestion = () => {
    const signs = ['+', '-', '*'];
    const numbersPair = cons(getRandomNumber(1, 15), getRandomNumber(1, 15));
    const sign = signs[getRandomNumber(0, signs.length)];
    const question = `${car(numbersPair)} ${sign} ${cdr(numbersPair)}`;
    let correctAnswer = Number;
    if (sign === '+') {
      correctAnswer = sum(numbersPair);
    } else if (sign === '-') {
      correctAnswer = sub(numbersPair);
    } else {
      correctAnswer = mul(numbersPair);
    }
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainCalc;
