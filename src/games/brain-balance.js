import { cons, car, cdr } from 'hexlet-pairs';
import game from '..';
import { getRandomNumber } from '../utils';

const welcomeMessage = 'Balance the given number.';

// Balances a pair of numbers
const balanceNumbersPair = (pair) => {
  const a = car(pair);
  const b = cdr(pair);
  let c = a;
  let d = b;

  // We are fine
  if (a === b || a - b === -1) {
    return cons(a, b);
  }

  // Right number must be reduced
  if (a - b <= -2) {
    c = a + 1;
    d = b - 1;
  }

  // Left number must be reduced
  if (a - b > 0) {
    c = a - 1;
    d = b + 1;
  }

  return balanceNumbersPair(cons(c, d));
};

export const getBalancedNumber = (number) => {
  const checkNumber = (numberToCheck) => {
    // Number -> Array
    let newNumber = numberToCheck.toString().split('');
    let numberBalanced = false;

    for (let i = 0; i < newNumber.length - 1; i += 1) {
      const leftNumber = Number(newNumber[i]);
      const rightNumber = Number(newNumber[i + 1]);

      // Recursivly balance two numbers
      const balancedNumbers = balanceNumbersPair(cons(leftNumber, rightNumber));
      const leftBalanced = car(balancedNumbers);
      const rightBalanced = cdr(balancedNumbers);

      // Push balanced numbers to new array
      newNumber[i] = leftBalanced;
      newNumber[i + 1] = rightBalanced;

      // If any pair has changed, then we are unbalanced yet
      if (leftNumber === leftBalanced && rightNumber === rightBalanced) {
        numberBalanced = true;
      } else {
        numberBalanced = false;
      }
    }

    // Array -> Number
    newNumber = Number(newNumber.join(''));

    // Return balanced number
    if (numberBalanced) return newNumber;

    // Or repeat
    return checkNumber(newNumber);
  };

  return checkNumber(number);
};

export const brainBalance = () => {
  const getQuestion = () => {
    const question = getRandomNumber(100, 10000);
    const correctAnswer = getBalancedNumber(question);
    return cons(question, correctAnswer);
  };

  game(welcomeMessage, getQuestion);
};

export default brainBalance;
