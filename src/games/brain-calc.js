import { cons, car, cdr } from 'hexlet-pairs';
import { welcomeUser, game, getRandomNumber, sum, sub, mul } from '..';

export const brainCalc = () => {
  const ROUNDS = 3;
  const user = welcomeUser();
  const signs = ['+', '-', '*'];

  const questions = () => {
    const questionsArray = [];
    for (let i = 0; i < ROUNDS; i += 1) {
      const numbersPair = cons(getRandomNumber(1, 15), getRandomNumber(1, 15));
      const sign = signs[getRandomNumber(0, signs.length + 1)];
      const question = `${car(numbersPair)} ${sign} ${cdr(numbersPair)}`;
      let correctAnswer = Number;
      if (sign === '+') {
        correctAnswer = sum(numbersPair);
      } else if (sign === '-') {
        correctAnswer = sub(numbersPair);
      } else {
        correctAnswer = mul(numbersPair);
      }
      questionsArray.push(cons(question, correctAnswer));
    }
    return questionsArray;
  };

  game(user, questions());
};

export default brainCalc;
