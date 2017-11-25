import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const ROUNDS = 3;

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
export default (welcomeMessage, getQaPair) => {
  console.log('Welcome to the Brain Games!');
  if (welcomeMessage) console.log(`${welcomeMessage}`);
  const user = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${user}!\n`);
  const startRound = (currentRound) => {
    if (currentRound === 0) {
      return console.log(`Congratulations, ${user}!`);
    }
    const questionPair = getQaPair();
    const question = car(questionPair); // get question string
    const correctAnswer = cdr(questionPair).toString(); // get right answer
    const isCorrect = askQuestion(question, correctAnswer); // ask question
    return isCorrect ?
      startRound(currentRound - 1) : // next round
      console.log(`Let's try again, ${user}!`); // bye bye :(
  };
  if (getQaPair) startRound(ROUNDS);
};
