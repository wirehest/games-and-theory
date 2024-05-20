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

// (function () {
let rl = readline.createInterface({ input, output });
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
    for (let i of [0, 1, 2]) {
      // check rows
      if (grid[i][0] !== null && grid[i].every((mark) => mark === grid[i][0])) {
        gameWon = true;
        break;
      }
      // check columns
      let gC = grid[0];
      if (gC[i] !== null && gC[i] === grid[1][i] && gC[i] === grid[2][i]) {
        gameWon = true;
        break;
      }
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

  let printGrid = () => console.log(grid);

  return { markGrid, printGrid, totalMoves, checkGrid, resetGrid };
})();

function makePlayers(n1 = 'Player1', m1 = 'X', n2 = 'Player2') {
  let makePlayer = (name, mark) => {
    let moves = 0;
    let wins = 0;
    let getName = () => name;
    let getMark = () => mark;
    let addWin = () => wins++;
    let winCount = () => wins;
    let addMove = () => moves++;
    let moveCount = () => moves;
    return { getName, getMark, addWin, winCount, addMove, moveCount };
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
  };

  return { player1, player2, getCurrent, flipTurn };
}

function gameController() {
  let gamesPlayed = 0;
  // let [x, y] = [null, null];
  let players = null;
  let active = true;

  let startGame = (name1, mark2, name2) => {
    // console.log('players: ' + players);
    if (players === null) players = makePlayers(name1, mark2, name2);
    console.log('Enter x and y positions separated by a comma, e.g., "0,1".');
    console.log(
      `Randomly selected ${players.getCurrent().getName()} to start.`
    );
    // console.log('players: ' + players);
  };

  let restartGame = () => {
    board.resetgrid();
    players = null;
  };

  let playTurn = (x, y) => {
    board.printGrid();
    // let position = await rl.question(`${players.current.name}, your turn: `);
    // [x, y] = position.split(',');

    board.printGrid();
    board.markGrid(x, y, players.getCurrent().getMark());
    players.getCurrent().addMove();
    if (board.checkGrid()) {
      players.getCurrent().addWin();
      console.log(
        players.getCurrent().getName() +
          ' won in ' +
          players.getCurrent().moveCount() +
          ' moves.'
      );
      active = false;
      return;
    }
    if (board.totalMoves() === 9) {
      console.log('Game tied!');
      active = false;
      return;
    }
    players.flipTurn();
  };

  let getActive = () => active;
  let getPlayers = () => players;
  let getGamesPlayed = () => gamesPlayed;
  // gamesPlayed++;

  return {
    getActive,
    getPlayers,
    getGamesPlayed,
    startGame,
    restartGame,
    playTurn,
  };
}

function displayController() {}

let game = gameController();
// console.log(game);
// let makeplayers = async (name1, mark1, name2) => {
// let name1 = await rl.question('enter name for player 1: ');
// let mark1 = await rl.question('player 1, select your mark (x or o): ');
// let name2 = await rl.question('enter name for player 2: ');
// let mark2 = mark1 === 'x' ? 'o' : 'x';
// let players = await gameplayers(name1, mark1, name2, mark2);
// rl.close();
// return await gameplayers(name1, mark1, name2, mark2);
// };
// players = await makeplayers();

game.startGame('Albus', 'X', 'Brenda');
while (game.getActive()) {
  board.printGrid();
  let position = await rl.question(
    `${game.getPlayers().getCurrent().getName()}, your turn: `
  );
  let [x, y] = position.split(',');
  game.playTurn(+x, +y);
}
game.gamesPlayed++;
rl.question('wait');
rl.close();
// })();
