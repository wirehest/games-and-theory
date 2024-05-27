// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

let grid = (function () {
  let marks = 0;
  let cells = new Array(9).fill(null);

  let countMarks = () => cells.filter((cell) => cell !== null).length;
  let getCells = () => cells;

  let resetCells = () => {
    cells.fill(null);
    moves = 0;
  };

  let markCell = (i, mark) => {
    if (cells[i] !== null) throw new Error('cell already marked');
    cells[i] = mark;
    marks++;
  };

  // returns undefined if no winner,
  // array of winning indices if winner
  let checkForWin = () => {
    let winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winner of winners) {
      let [a, b, c] = winner;
      if (cells[a] !== null && cells[a] === cells[b] && cells[a] === cells[c]) {
        return winner;
      }
    }
  };

  return { countMarks, getCells, resetCells, markCell, checkForWin };
})();

function makePlayer(name, mark) {
  let [moves, wins] = [0, 0];

  let getName = () => name;
  let getMark = () => mark.toLowerCase();
  let getWins = () => String(wins).padStart(3, '0');
  let getMoves = () => moves;
  let addWin = () => wins++;
  let addMove = () => moves++;
  let resetMoves = () => (moves = 0);

  return {
    getName,
    getMark,
    getWins,
    getMoves,
    addWin,
    addMove,
    resetMoves,
  };
}

function gameController() {
  let [p1, p2] = makePlayers();
  let currentPlayer = p1;
  // let active = true;

  function getPlayers() {
    return {
      p1Name: p1.getName(),
      p1Wins: p1.getWins(),
      p2Name: p2.getName(),
      p2Wins: p2.getWins(),
    };
  }

  function makePlayers(p1Name = 'P1', p2Name = 'P2') {
    return [makePlayer(p1Name, 'x'), makePlayer(p2Name, 'o')];
  }

  let restart = () => {
    grid.resetCells();
    [p1, p2].forEach((p) => p.resetMoves());
  };

  let reset = () => {
    grid.resetCells();
    [p1, p2] = makePlayers();
  };

  // let getState = () => state;
  // let setStateNull = () => (state = null);

  let flipTurn = () => (currentPlayer = currentPlayer === p1 ? p2 : p1);

  let playTurn = (i) => {
    grid.markCell(i, currentPlayer.getMark());
    currentPlayer.addMove();

    if (grid.countMarks() >= 5) {
      if (grid.checkForWin() !== undefined) {
        let winner = currentPlayer.getName();
        let moves = currentPlayer.getMoves();
        currentPlayer.addWin();
        return [`${winner} won in ${moves} moves!`, grid.checkForWin()];
      }

      if (grid.countMarks() === 9) {
        return ['You tied!'];
      }
    }

    flipTurn();
  };

  return { getPlayers, makePlayers, restart, reset, flipTurn, playTurn };
}

function displayController() {
  let game = gameController();
  let turnResult = null;
  let container = document.querySelector('.container');
  let resultModal = document.querySelector('.modal.result');

  function updateBoard() {
    let domCells = document.querySelectorAll('.gameboard > .cell');
    let p = game.getPlayers();
    let [p1Box, p2Box] = document.querySelectorAll('.p1, .p2');

    (function clearDomCells() {
      domCells.forEach((domCell) => domCell.classList.remove('x', 'o'));
      [p1Box, p2Box].forEach((p) => p.classList.remove('turn-highlight'));
    })();

    (function markDomCells() {
      grid.getCells().forEach((cell, i) => {
        if (cell === null) return;
        domCells[i].classList.add(cell);
      });
    })();

    (function updateScores() {
      let [p1Wins, p2Wins] = document.querySelectorAll('.p1-score, .p2-score');
      [p1Wins.textContent, p2Wins.textContent] = [p.p1Wins, p.p2Wins];
      // p1Wins.textContent = p.p1Wins;
    })();

    (function updateNames() {
      let [p1Name, p2Name] = document.querySelectorAll('.p1-name, .p2-name');
      [p1Name.textContent, p2Name.textContent] = [p.p1Name, p.p2Name];
      // p1Name.textContent = p.p1Name;
    })();

    // TODO highlight winning cells (use turnResult array)

    // highlights the current player's box to indicate turn
    // if (players.getCurrent() === players.p1) {
    //   p1Box.classList.add('turn-highlight');
    //   p2Box.classList.remove('turn-highlight');
    // } else {
    //   p2Box.classList.add('turn-highlight');
    //   p1Box.classList.remove('turn-highlight');
    // }
  }

  // handles marking the grid and advancing the game
  function addGameListener() {
    container.addEventListener('click', markListener);

    function markListener(event) {
      let target = event.target;

      if (target.className.startsWith('cell')) {
        turnResult = game.playTurn(target.dataset.pos);
        updateBoard();

        if (turnResult) {
          let message = resultModal.querySelector('.message');
          message.textContent = turnResult[0];
          resultModal.showModal();
          container.removeEventListener('click', markListener);
        }
      }
    }
  }

  (function addNavListener() {
    container.addEventListener('click', (event) => {
      let target = event.target;
      let playersModal = document.querySelector('.modal.player-entry');
      let playersForm = playersModal.querySelector('form');
      let resultModal = document.querySelector('.modal.result');
      let isFirstGame = true;

      // main buttons
      if (target.className === 'play') {
        if (isFirstGame) {
          playersModal.showModal();
          isFirstGame = false;
        } else addGameListener();
      }

      if (target.className === 'restart') {
        game.restart();
        updateBoard();
        addGameListener();
      }

      if (target.className === 'reset') {
        game.reset();
        isFirstGame = true;
        updateBoard();
      }

      // modal buttons
      if (target.className === 'start') {
        let { p1Name, p2Name } = Object.fromEntries(new FormData(playersForm));
        console.log(p1Name, p2Name);
        game.makePlayers(p1Name, p2Name);
        console.log(game.getPlayers());
        playersModal.close();
        playersForm.reset();

        updateBoard();
        addGameListener();
      }

      if (target.className === 'play-again') {
        game.restart();
        updateBoard();
        addGameListener();
        resultModal.close();
      }

      if (target.className === 'close') resultModal.close();
      if (target.className === 'cancel') playersModal.close();
      // common statements
      // game.setStateNull();
      // players = game.getPlayers();
      // clearBoard();
      // updatePlayerBoxes();
      // addGameBoardListener();
    });
  })();
}
displayController();

// console-only gameloop
// const rl = readline.createInterface({ input, output });
//
// let game = gameController();
// let name1 = await rl.question('Enter name for player 1: ');
// let name2 = await rl.question('Enter name for player 2: ');
//
// game.play(name1, name2);
// printGrid();
// while (game.getState()) {
//   let position = await rl.question(
//     `${game.getPlayers().getCurrent().getName()}, your turn: `,
//   );
//   game.playTurn(+position);
//   printGrid();
// }
// game.gamesPlayed++;
//
// rl.close();
//
// function printGrid() {
//   console.log(grid.getCells().slice(0, 3));
//   console.log(grid.getCells().slice(3, 6));
//   console.log(grid.getCells().slice(6, 9));
// }
