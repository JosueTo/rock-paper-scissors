// I need the computer choice a random value between Rock, Paper or Scissors.
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  const computerChoice = choices[randomNumber];
  return computerChoice
}

function playRound (playerSelection, computerSelection) {
  console.log(1, playerSelection, 2, computerSelection);
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'you tied!';
  } else if (playerSelection === 'paper'  && computerSelection === 'paper') {
    return 'you tied!';
  } else if (playerSelection === 'scissors'  && computerSelection === 'scissors') {
    return 'you tied!';
  } else if (playerSelection === 'rock'  && computerSelection === 'paper') {
    computerScore += 1;
    return 'you lost! paper covers rock';
  } else if (playerSelection === 'rock'  && computerSelection === 'scissors') {
    playerScore += 1;
    return 'you won! rock breaks scissors';
  } else if (playerSelection === 'paper'  && computerSelection === 'rock') {
    playerScore += 1;
    return 'you won! paper covers rock';
  } else if (playerSelection === 'paper'  && computerSelection === 'scissors') {
    computerScore += 1;
    return 'you lost! scissors cuts paper';
  } else if (playerSelection === 'scissors'  && computerSelection === 'rock') {
    computerScore += 1;
    return 'you lost! rock breaks scissors';
  } else if (playerSelection === 'scissors'  && computerSelection === 'paper') {
    playerScore += 1;
    return 'you won! scissors cuts paper';
  }
}

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  playerSelection = 'rock';
  console.log(playRound(playerSelection, computerSelection));
})

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  playerSelection = 'paper';
  console.log(playRound(playerSelection, computerSelection));
})

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  playerSelection = 'scissors';
  console.log(playRound(playerSelection, computerSelection));
})

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerInput = (prompt('To play type one of the following words: "Rock", "Paper" or "Scissors"'))
//     const playerSelection = playerInput.toLowerCase();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }

//   if (playerScore > computerScore) {
//     console.log(`You won the game! You get ${playerScore} points against 
//     ${computerScore} points for the computer!`)
//   } else if (playerScore < computerScore) {
//     console.log(`You lost the game! You get ${playerScore} points against 
//     ${computerScore} points for the computer!`)
//   } else {
//     console.log(`You have tied! Both get ${computerScore} points each`)
//   }
// }

// game()
// console.log(computerScore);
// console.log(playerScore);