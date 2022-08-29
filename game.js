// I need the computer choice a random value between Rock, Paper or Scissors.
let playerScore = 0;
let computerScore = 0;

const outcome = document.querySelector('.output');
const scores = document.querySelector('.scores');
const outcomeP = document.createElement('h3');
const displayScore = document.createElement('p');

//  COMPUTER PLAY RANDOMLY GENERATED
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  const computerChoice = choices[randomNumber];
  return computerChoice;
}

// GAME LOGIC AND POINTS.
function playRound (playerSelection, computerSelection) {
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

function game() {

// Player choice through the buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      computerSelection = getComputerChoice();
      playerSelection = button.className;

      // results of reach round
      outcomeP.textContent = (`${playRound(playerSelection, computerSelection)}`);
      outcome.appendChild(outcomeP);

      // score
      displayScore.textContent = (`Player Score: ${playerScore} Computer Score: ${computerScore}`);
      scores.appendChild(displayScore);
      
      // Announce a winner and stop the game
      if (playerScore === 5) {
        const winnerAnnounce = document.createElement('p');
        winnerAnnounce.textContent = ('Congratulations! You won!');
        scores.appendChild(winnerAnnounce);
        disableButton();
        restartButton();
      } else if (computerScore === 5) {
        const winnerAnnounce = document.createElement('p');
        winnerAnnounce.textContent = ('You lost! A computer beats you!');
        scores.appendChild(winnerAnnounce);
        disableButton();
        restartButton();
      }
    })
  })
}

// Disable buttons to end the game
function disableButton() {
  document.querySelector('.rock').disabled = true;
  document.querySelector('.paper').disabled = true;
  document.querySelector('.scissors').disabled = true;
}

function restartButton() {
  const restartButton = document.createElement('button');
  restartButton.textContent = 'Restart Game';
  restartButton.addEventListener('click', () => {
    location.reload();
  })
  scores.appendChild(restartButton);
}




game();