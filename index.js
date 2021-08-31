const readlineSync = require('readline-sync');

// track user score
let score = 0

// welcome user and tell them what the quiz is about
function welcomeUser() {
  let userName = '';
  
  while(!userName) {
  userName = readlineSync.question('What is your Name? ');
  }

  console.log(`Welcome  ${userName} to the Quiz!
  
Below you will see the country name and you have to type the name of Capital city of that country.
  
Good Luck :) 

`);
}

// store the question and answer in array of object
const countryData = [
  {
    name: 'Afghanistan: ',
    capital: 'Kabul',
  },
   {
    name: 'Bahamas: ',
    capital: 'Nassau',
  },
   {
    name: 'Cambodia: ',
    capital: 'Phnom Penh',
  },
  {
    name: 'Denmark: ',
    capital: 'Copenhagen'
  },
  {
    name: 'Egypt: ',
    capital: 'Cairo',
  },
  {
    name: 'France: ',
    capital: 'Paris'
  },
  {
    name: 'Germany: ',
    capital: 'Berlin'
  },
   {
    name: 'Hungary: ',
    capital: 'Budapest'
  },
   {
    name: 'Indonesia: ',
    capital: 'Jakarta'
  },
   {
    name: 'Jordan: ',
    capital: 'Amman'
  },
]

function playGame() {
  countryData.forEach((country) => {
    let userAnswer = readlineSync.question(country.name);

    if(userAnswer.toLowerCase() == country.capital.toLocaleLowerCase()) {
      console.log('Right :)')
      score++;
    } else {
      console.log('Wrong :(')
    }

  console.log(`Your current score is: ${score}`);
  console.log(`-------------------------------`);
  })
}

// store high scores
const highScores = [
  {
    name: 'Junaid',
    score: 10,
  },
  {
    name: 'Mr. Y',
    score: 9,
  },
]

// display high scores
function displayScore() {
  console.log(`Yayyy!!! You SCORED ${score}`);

  console.log('Check out the high scores.')

  highScores.forEach((highScore) => {
    console.log(`${highScore.name} : ${highScore.score} `)
  })
}

welcomeUser();
playGame();
displayScore();
