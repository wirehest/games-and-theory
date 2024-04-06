// let computerSelection = getComputerChoice();
// let playerSelection =

function playGame() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  console.log(playRound(playerSelection, computerSelection));

  function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    return roll === 0 ? 'rock' : roll === 1 ? 'paper' : 'scissors';
  }

  function getPlayerChoice() {
    let shapes = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt(
      'Make your selection (Rock, Paper, or Scissors).'
    ).toLowerCase();
    while (!shapes.includes(playerChoice)) {
      playerChoice = prompt(
        'Try again. Options are Rock, Paper, or Scissors.'
      ).toLowerCase();
    }
    return playerChoice;
  }

  function playRound(playerSelection, computerSelection) {
    let wins = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

    if (playerSelection === computerSelection) {
      return `You tied. You both played ${titleCase(playerSelection)}.`;
    }
    if (wins[playerSelection] === computerSelection) {
      return `You won! ${titleCase(playerSelection)} beats ${titleCase(
        computerSelection
      )}!`;
    }
    return `You lost! ${titleCase(computerSelection)} beats ${titleCase(
      playerSelection
    )}.`;
  }

  function titleCase(shape) {
    return shape[0].toUpperCase() + shape.slice(1);
  }
}

for (let i = 0; i < 5; i++) {
  playGame();
}
