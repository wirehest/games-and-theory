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

  let resetGrid = () => {
    grid.forEach((row) => row.fill(null));
    moves = 0;
  };
  let getGrid = () => grid;
  let getFlatGrid = () => grid.flat();
  let getTotalMoves = () => moves;

  return {
    markGrid,
    checkGrid,
    resetGrid,
    getGrid,
    getFlatGrid,
    getTotalMoves,
  };
})();

function makePlayers(n1, n2) {
  let makePlayer = (name, mark) => {
    let [moves, wins] = [0, 0];
    let getName = () => name;
    let getMark = () => mark.toLowerCase();
    let addWin = () => wins++;
    let addMove = () => moves++;
    let getWins = () => String(wins).padStart(3, '0');
    let getMoves = () => moves;
    let resetMoves = () => (moves = 0);

    return { getName, getMark, addWin, addMove, getWins, getMoves, resetMoves };
  };

  // let m2 = m1 === 'X' ? 'O' : 'X';
  let player1 = makePlayer(n1, 'x');
  let player2 = makePlayer(n2, 'o');
  let current = null;

  function randomizeStartingPlayer() {
    current = Math.floor(Math.random() * 2) === 0 ? player1 : player2;
  }

  let getCurrent = () => current;
  let flipTurn = () => {
    current = current === player1 ? player2 : player1;
  };

  let resetMoves = () => {
    [player1, player2].forEach((p) => p.resetMoves());
  };

  return {
    player1,
    player2,
    resetMoves,
    getCurrent,
    randomizeStartingPlayer,
    flipTurn,
  };
}

function gameController() {
  // let gamesPlayed = 0;
  let players = null;
  let state = null;

  // let init = (instruction) => {
  //   switch (instruction) {
  //     case 'reset':
  //       [players, state] = [null, null];
  //     case 'start':
  //       if (players === null) {
  //         players = makePlayers('A', 'X', 'B');
  //       }
  //       board.resetGrid();
  //   }
  // };

  let start = (p1Name, p2Name) => {
    if (players === null) {
      players = makePlayers(p1Name, p2Name);
    }
    players.randomizeStartingPlayer();
    board.resetGrid();
    state = null;
    players.resetMoves();
  };

  let restart = () => board.resetGrid();
  let reset = () => {
    board.resetGrid();
    players = makePlayers();
    state = null;
  };

  let playTurn = (x, y) => {
    board.markGrid(x, y, players.getCurrent().getMark().toLowerCase());
    players.getCurrent().addMove();

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

  let getState = () => state;
  let getPlayers = () => players;

  return { start, restart, reset, playTurn, getState, getPlayers };
}

function displayController() {
  let game = gameController();
  let players = game.getPlayers();

  let p1 = document.querySelector('.p1');
  let p2 = document.querySelector('.p2');
  let container = document.querySelector('.container');
  let domCells = document.querySelectorAll('.gameboard > .cell');

  function clearBoard() {
    domCells.forEach((domCell) => domCell.classList.remove('x', 'o'));
    [p1, p2].forEach((player) => player.classList.remove('turn-highlight'));
  }

  function updateBoard() {
    board.getFlatGrid().forEach((cell, i) => {
      if (cell === null) return;
      domCells[i].classList.add(cell);
    });

    if (players.getCurrent() === players.player1) {
      p1.classList.add('turn-highlight');
      p2.classList.remove('turn-highlight');
    } else {
      p2.classList.add('turn-highlight');
      p1.classList.remove('turn-highlight');
    }
  }

  function getPlayersDetails() {}

  function updatePlayerBoxes() {
    let [p1Name, p1Mark] = p1.querySelectorAll('.p1-name, .p1-mark');
    let [p2Name, p2Mark] = p2.querySelectorAll('.p2-name, .p2-mark');
    // console.log(players.player1.getName());
    p1Name.textContent = players.player1.getName();
    p2Name.textContent = players.player2.getName();
    p1Mark.classList.add(String(players.player1.getMark()));
    p2Mark.classList.add(String(players.player2.getMark()));
  }

  function updateScores() {
    let p1Score = document.querySelector('.p1-score');
    let p2Score = document.querySelector('.p2-score');
    p1Score.textContent = players.player1.getWins();
    p2Score.textContent = players.player2.getWins();
  }

  function addGameBoardListener() {
    let markListener = (event) => {
      let target = event.target;

      if (target.className.startsWith('cell')) {
        let [x, y] = target.dataset.pos.split(',');
        game.playTurn(+x, +y);
        updateBoard();

        if (game.getState() === 'won' || game.getState() === 'tied') {
          let message = document.querySelector('.modal.result .message');

          switch (game.getState()) {
            case 'won':
              let winner = game.getPlayers().getCurrent();
              let name = game.getPlayers().getCurrent().getName();
              let moves = game.getPlayers().getCurrent().getMoves();

              updateScores();
              message.textContent = `${name} won in ${moves} moves!`;
              break;
            case 'tied':
              message.textContent = 'You tied!';
              break;
          }
          document.querySelector('.modal.result').showModal();
          container.removeEventListener('click', markListener);
        }
      }
    };
    container.addEventListener('click', markListener);
  }

  (function addButtonListener() {
    container.addEventListener('click', (event) => {
      let target = event.target;
      let playerEntry = document.querySelector('.modal.player-entry');
      // let playerDetails;

      switch (target.className) {
        case 'play':
          if (players === null) {
            playerEntry.showModal();
            // document.addEventListener(
            //   'submit',
            //   (event) => {
            //     event.preventDefault();
            //     playerDetails = new FormData(playerEntry.querySelector('form'));
            //   },
            //   { once: true },
            // );
          } else {
            clearBoard();
            // game.start(({ p1Name = 'P1', p2Name = 'P2' } = playerDetails));
            game.start();
            players = game.getPlayers();
            updatePlayerBoxes();
            addGameBoardListener();
          }
          break;
        case 'start':
          playerEntry.close();
          let { p1Name = 'P1', p2Name = 'P2' } = Object.fromEntries(
            new FormData(playerEntry.querySelector('form')),
          );
          // console.log(playerData);
          // console.log('275', p1Name, p2Name);
          game.start(p1Name, p2Name);
          players = game.getPlayers();
          updatePlayerBoxes();
          addGameBoardListener();
          break;
      }

      if (target.className === 'play-again') {
        target.parentElement.parentElement.close();
        clearBoard();
        game.start();
        game.getPlayers().randomizeStartingPlayer();
        updatePlayerBoxes();
        addGameBoardListener();
      }

      if (target.className === 'reset') {
        clearBoard();
        game.reset();
        game.start();
        players = game.getPlayers();
        game.getPlayers().randomizeStartingPlayer();
        updateScores();
        updatePlayerBoxes();
        addGameBoardListener();
      }

      if (target.className === 'close') {
        target.parentElement.parentElement.close();
      }
    });
  })();
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
