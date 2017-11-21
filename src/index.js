import readlineSync from 'readline-sync';

const game = () => {
    console.log('Welcome to the Brain Games!\n');
    let userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}

export default game;
