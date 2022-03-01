const readline = require('readline-sync');
const MAX_WINS = 3;
const CHOICES = {
  rock: {
    validInput: ['rock', 'r'],
    winsAgainst: ['scissors', 'lizard']
  },
  paper: {
    validInput: ['paper', 'p'],
    winsAgainst: ['rock', 'spock']
  },
  scissors: {
    validInput: ['scissors', 'sc'],
    winsAgainst: ['paper', 'lizard']
  },
  lizard: {
    validInput: ['lizard', 'l'],
    winsAgainst: ['paper', 'spock']
  },
  spock: {
    validInput: ['spock', 'sp'],
    winsAgainst: ['rock', 'scissors']
  }
};

function prompt (message) {
  console.log(`=> ${message}`);
}

function welcomeMessage () {
  console.clear();
  prompt('Welcome to Rock Paper Scissors Lizard Spock!');
  prompt('The first player to win three rounds wins the match. Good luck!\n');
}

function getUserChoice () {
  prompt('Enter "r" for rock, "p" for paper, "sc" for scissors, "l" for lizard or "sp" for spock.');
  let userInput = readline.question().toLowerCase();

  while (!isValidInput(userInput)) {
    prompt('Please enter a valid choice ("r", "p", "sc", "l" or "sp").');
    userInput = readline.question().toLowerCase();
  }
  return findFullChoice(userInput);
}

function isValidInput (userInput) {
  return findValidInputs().includes(userInput);
}

function findValidInputs () {
  let validInputsArray = [];
  for (let property in CHOICES) {
    for (let value of CHOICES[property].validInput) {
      validInputsArray.push(value);
    }
  }
  return validInputsArray;
}

function findFullChoice (userInput) {
  let fullChoice;
  for (let property in CHOICES) {
    if (CHOICES[property].validInput.includes(userInput)) {
      fullChoice = property;
    }
  }
  return fullChoice;
}

function determineComputerChoice () {
  let randomIndex = Math.floor(Object.keys(CHOICES).length * Math.random());
  return Object.keys(CHOICES)[randomIndex];
}

function displayChoices (userChoice, computerChoice) {
  console.clear();
  prompt(`You chose ${userChoice.toUpperCase()} and the computer chose ${computerChoice.toUpperCase()}.`);
}

function determineRoundWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (CHOICES[userChoice].winsAgainst.includes(computerChoice)) {
    return 'user';
  } else {
    return 'computer';
  }
}

function displayRoundWinner (roundWinner) {
  switch (roundWinner) {
    case 'tie':
      prompt('It\'s a tie.');
      break;
    case 'user':
      prompt('You win this round!');
      break;
    case 'computer':
      prompt('The computer wins this round!');
  }
}

function incrementScore (score, roundWinner) {
  switch (roundWinner) {
    case 'user':
      score.userWinCount += 1;
      break;
    case 'computer':
      score.computerWinCount += 1;
  }
}

function displayWinCount (score) {
  prompt(`Your win count is ${score.userWinCount}. The computer's win count is ${score.computerWinCount}.\n`);
}

function displayMatchWinner (score) {
  if (score.userWinCount === MAX_WINS) {
    prompt('Congratulations, you won the match!!\n');
  } else {
    prompt('Sorry, the computer won the match.\n');
  }
}

function resetScore (score) {
  score.userWinCount = 0;
  score.computerWinCount = 0;
}

function getPlayAgain () {
  prompt('Would you like to play again? Enter "y" or "n".');
  let answer = readline.question().toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt('Please enter "y" for yes or "n" for no.');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function newMatchGreeting () {
  console.clear();
  prompt('New match, good luck!\n');
}

function goodbyeMessage () {
  console.clear();
  prompt('Thanks for playing!');
}

let score = {
  userWinCount: 0,
  computerWinCount: 0,
};

welcomeMessage();

while (true) {
  while (score.userWinCount < MAX_WINS && score.computerWinCount < MAX_WINS) {
    let userChoice = getUserChoice();
    let computerChoice = determineComputerChoice();
    let roundWinner = determineRoundWinner(userChoice, computerChoice);
    displayChoices(userChoice, computerChoice);
    displayRoundWinner(roundWinner);
    incrementScore(score, roundWinner);
    displayWinCount(score);
  }
  displayMatchWinner(score);
  resetScore(score);

  let playAgain = getPlayAgain();
  if (playAgain[0] === 'y') {
    newMatchGreeting();
  } else break;
}

goodbyeMessage();