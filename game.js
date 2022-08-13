// I need the computer choice a random value between Rock, Paper or Scissors.

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  const compChoice = choices[randomNumber];
  return compChoice
}

console.log(getComputerChoice())

function playRound (playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'you tied!';
  } else if (playerSelection === 'paper'  && computerSelection === 'paper') {
    return 'you tied!';
  } else if (playerSelection === 'scissors'  && computerSelection === 'scissors') {
    return 'you tied!';
  } else if (playerSelection === 'rock'  && computerSelection === 'paper') {
    return 'you lost! paper covers rock';
  } else if (playerSelection === 'rock'  && computerSelection === 'scissors') {
    return 'you won! rock breaks scissors';
  } else if (playerSelection === 'paper'  && computerSelection === 'rock') {
    return 'you won! paper covers rock';
  } else if (playerSelection === 'paper'  && computerSelection === 'scissors') {
    return 'you lost! scissors cuts paper';
  } else if (playerSelection === 'scissors'  && computerSelection === 'rock') {
    return 'you lost! rock breaks scissors';
  } else if (playerSelection === 'rock'  && computerSelection === 'paper') {
    return 'you won! scissors cuts paper';
  }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection));