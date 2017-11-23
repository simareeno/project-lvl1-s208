import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;
export const sum = pair => car(pair) + cdr(pair);
export const sub = pair => car(pair) - cdr(pair);
export const mul = pair => car(pair) * cdr(pair);

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
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

// Game. Receives username and array of questions.
// Each question is a pair of question string and an answer.
export const game = (user, questions) => {
  const startRound = (currentRound) => {
    if (currentRound === 0) {
      return console.log(`Congratulations, ${user}!`);
    }
    const question = car(questions[currentRound - 1]); // get question string
    const correctAnswer = cdr(questions[currentRound - 1]).toString(); // get right answer
    const isCorrect = askQuestion(question, correctAnswer); // ask question
    return isCorrect ?
      startRound(currentRound - 1) : // next round
      console.log(`Let's try again, ${user}!`); // bye bye :(
  };
  startRound(questions.length);
};

export default {
  welcomeUser, game, getRandomNumber, sum, sub, mul,
};
