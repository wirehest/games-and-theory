// TODO render object
// TODO functions to allow interaction with the DOM (also checks if cell
// already occupied
// XXXX setup functionality incl. add player names, start/restart, display
// game results
// TODO restart functionality
// minimize global code
// use factory functions and IIFEs where necessary

// readline for user input in console
// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

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

  let checkGrid = () => {
    let gameWon = false;
    for (let i of [0, 1, 2]) {
      // check rows and columns
      if (
        (grid[i][0] !== null && grid[i].every((mark) => mark === grid[i][0])) ||
        (grid[0][i] !== null &&
          grid[0][i] === grid[1][i] &&
          grid[0][i] === grid[2][i])
      ) {
        gameWon = true;
        break;
      }
      // check columns
      // let gC = grid[0];
      // if (
      //   grid[0] !== null &&
      //   grid[0] === grid[1][i] &&
      //   grid[0] === grid[2][i]
      // ) {
      //   gameWon = true;
      //   break;
      // }
    }
    // check diagonals
    if (grid[1][1] !== null) {
      if (
        (grid[1][1] === grid[0][2] && grid[1][1] === grid[2][0]) ||
        (grid[1][1] === grid[0][0] && grid[1][1] === grid[2][2])
      ) {
        gameWon = true;
      }
    }
    return gameWon;
  };

  let resetGrid = () => grid.forEach((row) => row.fill(null));
  // let printGrid = () => console.log(grid);
  let getFlatGrid = () => grid.flat();
  let getTotalMoves = () => moves;

  return { markGrid, checkGrid, resetGrid, getFlatGrid, getTotalMoves };
})();

function makePlayers(n1 = 'Player1', m1 = 'X', n2 = 'Player2') {
  let makePlayer = (name, mark) => {
    let [moves, wins] = [0, 0];
    let getName = () => name;
    let getMark = () => mark;
    let addWin = () => wins++;
    let addMove = () => moves++;
    let getWins = () => wins;
    let getMoves = () => moves;

    return { getName, getMark, addWin, addMove, getWins, getMoves };
  };

  let m2 = m1 === 'X' ? 'O' : 'X';
  let player1 = makePlayer(n1, m1);
  let player2 = makePlayer(n2, m2);
  let current = (() => {
    return Math.floor(Math.random() * 2) === 0 ? player1 : player2;
  })();

  let getCurrent = () => current;
  let flipTurn = () => {
    current = current === player1 ? player2 : player1;
    console.log('flipTurn' + current.getName());
  };

  return { player1, player2, getCurrent, flipTurn };
}

function gameController() {
  let gamesPlayed = 0;
  let players = null;
  let state = null;

  let start = () => {
    if (players === null) {
      // let name1 = prompt('Enter a name for Player1');
      // let mark1 = prompt('Enter a mark for Player1 ("X" or "O")');
      // let name2 = prompt('Enter a name for Player2');
      // players = makePlayers(name1, mark2, name2);
      players = makePlayers('A', 'X', 'B');
    }
    // console.log('Enter x and y positions separated by a comma, e.g., "0,1".');
    // console.log(
    //   `Randomly selected ${players.getCurrent().getName()} to start.`,
    // );
  };

  let restart = () => {
    board.resetGrid();
    players = null;
  };

  let playTurn = (x, y) => {
    board.markGrid(x, y, players.getCurrent().getMark().toLowerCase());
    players.getCurrent().addMove();
    // board.printGrid();

    if (board.getTotalMoves() >= 5) {
      if (board.checkGrid()) {
        players.getCurrent().addWin();
        state = 'won';
        return;
      }
      if (board.getTotalMoves() === 9) {
        state = 'tied';
        return;
      }
    }
    players.flipTurn();
  };

  // let getActive = () => active;
  let getState = () => state;
  let getPlayers = () => players;
  let getGamesPlayed = () => gamesPlayed;
  // gamesPlayed++;

  return { start, restart, playTurn, getState, getPlayers, getGamesPlayed };
}

function displayController() {
  let game = gameController();
  // let players = null;

  let button = document.querySelector('li.cell');
  let container = document.querySelector('.container');
  let domCells = document.querySelectorAll('.gameboard > .cell');

  function updateBoard() {
    board.getFlatGrid().forEach((cell, i) => domCells[i].classList.add(cell));
    // TODO update scores when game is won or tied
    // TODO highlight winning cells
  }

  function addGameBoardListener() {
    let markListener = (event) => {
      let target = event.target;

      if (target.className.startsWith('cell')) {
        let [x, y] = target.dataset.pos.split(',');
        game.playTurn(+x, +y);
        updateBoard();

        if (game.getState() === 'won' || game.getState() === 'tied') {
          switch (game.getState()) {
            case 'won':
              // TODO show win modal + endgame options
              break;
            case 'tied':
              // TODO show tied modal + endgame options
              break;
          }
          // remove eventListener so players can't mark after game end
          container.removeEventListener('click', markListener);
        }
      }
    };
    container.addEventListener('click', markListener);
  }

  function addButtonListener() {
    let navListener = container.addEventListener('click', (event) => {
      let target = event.target;

      if (target.className === 'new') {
        game.start();
        addGameBoardListener();
      }
    });
  }
  addButtonListener();

  // while (game.getActive()) {}
}
displayController();

// console-only gameloop
// let rl = readline.createInterface({ input, output });
// let game = gameController();
//
// let name1 = await rl.question('Enter name for player 1: ');
// let mark1 = await rl.question('Player 1, select your mark (X or O): ');
// let name2 = await rl.question('Enter name for player 2: ');
//
// game.startGame(name1, mark1, name2);
// board.printGrid();
// while (game.getActive()) {
//   let position = await rl.question(
//     `${game.getPlayers().getCurrent().getName()}, your turn: `
//   );
//   let [x, y] = position.split(',');
//   game.playTurn(+x, +y);
// }
// game.gamesPlayed++;
// rl.close();
