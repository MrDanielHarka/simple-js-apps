const weapon = 'rock'


const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === 'bomb') {
  return userInput
    } else {
    console.log("This is not a valid weapon of choice. Please type rock, paper or scissors.");
  }
}

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() *3 )
  switch (randNum) {
    case 0:
      return 'rock';
      break
    case 1:
      return 'paper';
      break
    case 2:
      return 'scissors'
  }
};

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
    return '\nThis game is a tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return '\nSorry, the Computer won.';
    } else {
      return '\nCongrats, you won!';
    } 
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return '\nSorry, the Computer won.';
    } else {
      return '\nCongrats, you won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return '\nSorry, the Computer won.';
    } else {
      return '\nCongrats, you won!';
    }
  }
  
  if (userChoice = 'bomb') {
      return '\nCongrats! You won, you little cheater. ;D';
    }
};

const playGame = () => {
  const userChoice = getUserChoice(weapon);
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}.`)
  console.log(`\nThe Computer chose ${computerChoice}.`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
