import { car, cdr } from 'hexlet-pairs';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

export const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomNumber(0, signs.length)];
};

export const sum = pair => car(pair) + cdr(pair);

export const sub = pair => car(pair) - cdr(pair);

export const mul = pair => car(pair) * cdr(pair);

export default {
  getRandomNumber, getRandomSign, sum, sub, mul,
};
