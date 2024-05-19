// TODO store gameboard as array inside Gameboard object
// TODO store players in objects
// TODO game flow control via object
// TODO render object
// TODO functions to allow interaction with the DOM (also checks if cell
// already occupied
// TODO setup functionality incl. add player names, start/restart, display
// game results
//
// minimize global code
// use factory functions and IIFEs where necessary
//
// allow for tie

// readline for user input in console
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

(function () {
  let board = (function () {
    let grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    let markGrid = (x, y, mark) => {
      if (grid[x][y] !== null) throw new Error('cell already marked');
      grid[x][y] = mark;
    };

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

    let printGrid = () => console.log(grid);

    return { markGrid, printGrid, checkGrid };
  })();

  function player(name, mark) {
    let moves = 0;
    let addMove = () => moves++;
    let printMoves = () => moves;
    return { name, mark, addMove, printMoves };
  }

  async function gameController() {
    // TODO add player names
    // let marks = { X: true, O: true };

    const rl = readline.createInterface({ input, output });

    let player1 = player('Albert', 'X');
    let player2 = player('Betty', 'O');
    let position = '';
    let currentPlayer = player1;
    let [x, y] = [null, null];

    console.log(
      'Enter row and column positions separated by a comma, e.g., "0,1".'
    );
    while (true) {
      board.printGrid();
      position = await rl.question(`${currentPlayer.name}, your turn: `);
      [x, y] = position.split(',');
      board.markGrid(+x, +y, currentPlayer.mark);
      currentPlayer.addMove();
      if (board.checkGrid()) break;
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    board.printGrid();
    console.log(
      currentPlayer.name + ' won in ' + currentPlayer.printMoves() + ' moves.'
    );
    rl.close();
    // TODO when game end, display results
  }

  gameController();
})();
