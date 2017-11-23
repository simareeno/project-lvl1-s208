import { cons, car, cdr } from 'hexlet-pairs';
import { welcomeUser, game, getRandomNumber, gcd } from '..';

export const brainGcd = () => {
  const ROUNDS = 3;
  const welcomeMessage = 'Find the greatest common divisor of given numbers.';
  const user = welcomeUser(welcomeMessage);

  const questions = () => {
    const questionsArray = [];
    for (let i = 0; i < ROUNDS; i += 1) {
      const numbersPair = cons(getRandomNumber(10, 100), getRandomNumber(10, 100));
      const question = `${car(numbersPair)} ${cdr(numbersPair)}`;
      const correctAnswer = gcd(numbersPair);
      questionsArray.push(cons(question, correctAnswer));
    }
    return questionsArray;
  };

  game(user, questions());
};

export default brainGcd;
