import { cons, car, cdr } from 'hexlet-pairs';
import { game, getRandomNumber, gcd } from '..';

export const brainGcd = () => {
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';

  const getQuestion = () => {
    const numbersPair = cons(getRandomNumber(10, 100), getRandomNumber(10, 100));
    const question = `${car(numbersPair)} ${cdr(numbersPair)}`;
    const correctAnswer = gcd(numbersPair);
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainGcd;
