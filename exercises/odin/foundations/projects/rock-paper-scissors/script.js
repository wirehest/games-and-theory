function playGame() {
  let playButtons = document.querySelector('.buttons');
  let playResult = document.querySelector('.result');
  let playerScore = document.querySelector('.player-score');
  let computerScore = document.querySelector('.computer-score');

  // playerScore.textContent = 0;
  // computerScore.textContent = 0;

  playButtons.addEventListener('click', (event) => {
    let playerSelection = event.target.textContent.toLowerCase();
    playResult.textContent = playRound(playerSelection, getComputerChoice());
  });

  function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    return roll === 0 ? 'rock' : roll === 1 ? 'paper' : 'scissors';
  }

  function playRound(playerSelection, computerSelection) {
    const WINS = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
    if (computerScore.textContent === '5' || playerScore.textContent === '5') {
      playerScore.textContent = computerScore.textContent = 0;
    }
    if (playerSelection === computerSelection) {
      return `Round tied. You both played ${toTitleCase(playerSelection)}.`;
    }
    if (WINS[playerSelection] === computerSelection) {
      if (++playerScore.textContent === 5) return 'You won the game!';
      return `Round won! ${toTitleCase(playerSelection)} beats ${toTitleCase(
        computerSelection
      )}!`;
    }
    if (++computerScore.textContent === 5) return 'The computer won the game!';
    return `Round lost! ${toTitleCase(computerSelection)} beats ${toTitleCase(
      playerSelection
    )}.`;
  }

  function toTitleCase(shape) {
    return shape[0].toUpperCase() + shape.slice(1);
  }
}

playGame();
