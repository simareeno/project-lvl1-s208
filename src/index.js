import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!\n');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * max) + min;

// Получает число и возвращает правильный ответ
const getAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Принимает вопрос и правильный ответ, возвращает true если ответы совпадают
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

export const game = (rounds, user) => {
  const startRound = (roundsCounter) => {
    if (roundsCounter === 0) {
      return console.log(`Congratulations, ${user}!`);
    }
    const question = getRandomNumber(1, 100); // получаем число для вопроса
    const correctAnswer = getAnswer(question); // получаем правильный ответ
    const isCorrect = askQuestion(question, correctAnswer); // задаем вопрос
    return isCorrect ?
      startRound(roundsCounter - 1) : // идем в следующий раунд
      console.log(`Let's try again, ${user}!`); // прощаемся :(
  };
  startRound(rounds);
};

export default { welcomeUser, game };
