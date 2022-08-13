// I need the computer choice a random value between Rock, Paper or Scissors.

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3)
  const compChoice = choices[randomNumber];
  return compChoice
}

console.log(getComputerChoice())