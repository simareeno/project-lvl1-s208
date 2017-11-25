import { cons } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber, getRandomSign, sum, sub, mul } from '../utils';

const welcomeMessage = 'What number is missing in this progression?';
const PROGRESSION_LENGTH = 10;

// Returns an array of numbers, generated progressivly
const getProgression = () => {
  const startingNumber = getRandomNumber(1, 20);
  const increment = getRandomNumber(1, 10);
  const progression = [startingNumber];
  const sign = getRandomSign();
  let rule = Function;
  if (sign === '+') rule = x => sum(cons(x, increment));
  if (sign === '-') rule = x => sub(cons(x, increment));
  if (sign === '*') rule = x => mul(cons(x, increment));
  const getNextNumber = prevNumber => rule(prevNumber);
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(getNextNumber(progression[i]));
  }
  return progression;
};

export const brainProgression = () => {
  const getQuestion = () => {
    const progression = getProgression();
    const numberToHide = getRandomNumber(0, progression.length);
    const correctAnswer = progression[numberToHide];
    progression[numberToHide] = '..';
    const question = progression.join(' ');
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainProgression;
