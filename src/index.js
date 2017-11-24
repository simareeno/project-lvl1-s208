import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
export const sum = pair => car(pair) + cdr(pair);
export const sub = pair => car(pair) - cdr(pair);
export const mul = pair => car(pair) * cdr(pair);
export const gcd = (pair) => {
  const a = Math.abs(car(pair));
  const b = Math.abs(cdr(pair));
  if (!b || b === 0) {
    return a;
  }
  return gcd(cons(b, a % b));
};

export const welcomeUser = (message) => {
  let welcomeMessage = 'Welcome to the Brain Games!';
  if (message) welcomeMessage += `\n${message}\n`;
  console.log(welcomeMessage);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

// Accepts a question and a right answer, returns 'true' if they match
const askQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return answer === correctAnswer;
};

// Game. Receives welcome message and question function of questions.
// Each question is a pair of question string and an answer.
export const game = (welcomeMessage, getQuestion) => {
  const ROUNDS = 3;
  const user = welcomeUser(welcomeMessage);
  const startRound = (currentRound) => {
    if (currentRound === 0) {
      return console.log(`Congratulations, ${user}!`);
    }
    const questionPair = getQuestion();
    const question = car(questionPair); // get question string
    const correctAnswer = cdr(questionPair).toString(); // get right answer
    const isCorrect = askQuestion(question, correctAnswer); // ask question
    return isCorrect ?
      startRound(currentRound - 1) : // next round
      console.log(`Let's try again, ${user}!`); // bye bye :(
  };
  if (getQuestion) startRound(ROUNDS);
};

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

export default {
  welcomeUser, game, getRandomNumber, sum, sub, mul, gcd, getBalancedNumber,
};
