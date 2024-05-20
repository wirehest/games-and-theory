// TODO render object
// TODO functions to allow interaction with the DOM (also checks if cell
// already occupied
// TODO setup functionality incl. add player names, start/restart, display
// game results
// minimize global code
// use factory functions and IIFEs where necessary

// readline for user input in console
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

(function () {
  let board = (function () {
    let moves = 0;
    let grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    let markGrid = (x, y, mark) => {
      if (grid[x][y] !== null) throw new Error('cell already marked');
      grid[x][y] = mark;
      moves++;
    };

    let totalMoves = () => moves;

    let checkGrid = () => {
      let gameWon = false;
      // check rows
      [0, 1, 2].forEach((x) => {
        if (
          grid[x][0] !== null &&
          grid[x][0] === grid[x][1] &&
          grid[x][1] === grid[x][2]
        ) {
          gameWon = !gameWon;
        }
      });

      // check columns
      [0, 1, 2].forEach((y) => {
        if (
          grid[0][y] !== null &&
          grid[0][y] === grid[1][y] &&
          grid[1][y] === grid[2][y]
        ) {
          gameWon = !gameWon;
        }
      });

      // check diagonals
      if (grid[1][1] !== null) {
        if (
          (grid[1][1] === grid[0][2] && grid[1][1] === grid[2][0]) ||
          (grid[1][1] === grid[0][0] && grid[1][1] === grid[2][2])
        ) {
          gameWon = !gameWon;
        }
      }

      return gameWon;
    };
    let resetGrid = () => grid.forEach((row) => row.fill(null));

    let printGrid = () => console.log(grid);

    return { markGrid, printGrid, totalMoves, checkGrid, resetGrid };
  })();

  async function gamePlayers() {
    function makePlayer(name, mark) {
      let moves = 0;
      let wins = 0;
      const addWin = () => wins++;
      const winCount = () => wins;
      const addMove = () => moves++;
      const moveCount = () => moves;
      return { name, mark, addWin, winCount, addMove, moveCount };
    }

    let rl = readline.createInterface({ input, output });
    let name1 = await rl.question('Enter name for player 1: ');
    let mark1 = await rl.question('Player 1, select your mark (X or O): ');
    let name2 = await rl.question('Enter name for player 2: ');
    let mark2 = mark1 === 'X' ? 'O' : 'X';
    rl.close();

    return [makePlayer(name1, mark1), makePlayer(name2, mark2)];
  }

  async function gameController() {
    let gamesPlayed = 0;
    let [x, y] = [null, null];
    let players = await gamePlayers();

    let currentPlayer = players[Math.floor(Math.random() * 2)];

    let rl = readline.createInterface({ input, output });
    console.log('Enter x and y positions separated by a comma, e.g., "0,1".');
    console.log(`Randomly selected ${currentPlayer.name} to start.`);
    while (true) {
      board.printGrid();
      let position = await rl.question(`${currentPlayer.name}, your turn: `);
      [x, y] = position.split(',');

      board.printGrid();
      board.markGrid(+x, +y, currentPlayer.mark);
      currentPlayer.addMove();
      if (board.checkGrid()) {
        currentPlayer.addWin();
        console.log(
          currentPlayer.name +
            ' won in ' +
            currentPlayer.moveCount() +
            ' moves.'
        );
        break;
      }
      if (board.totalMoves() === 9) {
        console.log('Game tied!');
        break;
      }
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    }
    gamesPlayed++;
    rl.close();
  }
  gameController();
  // game loop
  // while (true) {
  //   if (gamesPlayed === 0) setupPlayers();
  //   gameController();
  // play again
  //
})();
