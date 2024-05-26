let grid = (function () {
  let moves = 0;
  let cells = new Array(9).fill(null);

  let countMoves = () => cells.filter((cell) => cell !== null).length;
  let getCells = () => cells;

  let markCell = (i, mark) => {
    if (cells[i] !== null) throw new Error('cell already marked');
    cells[i] = mark;
    moves++;
  };

  let resetCells = () => {
    grid.fill(null);
    moves = 0;
  };

  let checkForWin = () => {
    // check rows
    for (let x of [0, 3, 6]) {
      if (
        cells[0 + x] !== null &&
        cells[0 + x] === cells[1 + x] &&
        cells[0 + x] === cells[2 + x]
      ) {
        return [0, 1, 2].map((index) => index + x);
      }
    }
    // check columns
    for (let y of [0, 1, 2]) {
      if (
        cells[0 + y] !== null &&
        cells[0 + y] === cells[3 + y] &&
        cells[0 + y] === cells[6 + y]
      ) {
        return [0, 3, 6].map((index) => index + y);
      }
    }
    // check diagonals
    if (cells[4] !== null) {
      if (cells[4] === cells[0] && cells[4] === cells[8]) return [0, 4, 8];
      if (cells[4] === cells[2] && cells[4] === cells[6]) return [2, 4, 6];
    }
  };

  return { countMoves, getCells, markCell, resetCells, checkForWin };
})();

function makePlayers(n1 = 'P1', n2 = 'P2') {
  let p1 = makePlayer(n1, 'x');
  let p2 = makePlayer(n2, 'o');
  let current = p1;

  let getCurrent = () => current;
  let flipTurn = () => (current = current === p1 ? p2 : p1);
  let resetMoves = () => [p1, p2].forEach((p) => p.resetMoves());
  // let resetMovesAndWins = () => [p1, p2].forEach((p) => p.resetAll());

  function makePlayer(name, mark) {
    let [moves, wins] = [0, 0];

    let getName = () => name;
    let getMark = () => mark.toLowerCase();
    let getWins = () => String(wins).padStart(3, '0');
    let getMoves = () => moves;
    let addWin = () => wins++;
    let addMove = () => moves++;
    let resetMoves = () => (moves = 0);
    // let resetAll = () => ([moves, wins] = [0, 0]);

    return {
      getName,
      getMark,
      getWins,
      getMoves,
      addWin,
      addMove,
      resetMoves,
      // resetAll,
    };
  }

  return { p1, p2, getCurrent, flipTurn, resetMoves }; // , resetMovesAndWins };
}

function gameController() {
  let [players, currentPlayer, state] = [null, null, null];

  let start = (p1Name, p2Name) => {
    if (state === 'playing') return;
    if (players === null) {
      players = makePlayers(p1Name, p2Name);
      currentPlayer = players.getCurrent();
    }
    state = 'playing';
  };

  let restart = () => {
    grid.resetCells();
    players.resetMoves();
    // no change to state variable
  };

  let reset = () => {
    grid.resetCells();
    players = makePlayers(players.p1.getName(), players.p2.getName());
    state = null;
  };

  let playTurn = (i) => {
    grid.markCell(i, currentPlayer.getMark());
    currentPlayer.addMove();

    if (grid.countMoves() >= 5) {
      if (grid.checkForWin() !== undefined) {
        currentPlayer.addWin();
        state = 'won';
        return grid.checkForWin();
      }

      if (grid.countMoves() === 9) {
        state = 'tied';
        return;
      }
    }
    players.flipTurn();
    currentPlayer = players.getCurrent();
  };

  let getState = () => state;
  let getPlayers = () => players;

  return { start, restart, reset, playTurn, getState, getPlayers };
}

(function displayController() {
  let game = gameController();
  let players = game.getPlayers();

  let p1Box = document.querySelector('.p1');
  let p2Box = document.querySelector('.p2');
  let container = document.querySelector('.container');
  let domCells = document.querySelectorAll('.gameboard > .cell');

  function clearBoard() {
    domCells.forEach((domCell) => domCell.classList.remove('x', 'o'));
    [p1Box, p2Box].forEach((player) =>
      player.classList.remove('turn-highlight'),
    );
  }

  function updateBoard() {
    grid.getCells().forEach((cell, i) => {
      if (cell === null) return;
      domCells[i].classList.add(cell);
    });

    if (players.getCurrent() === players.p1) {
      p1Box.classList.add('turn-highlight');
      p2Box.classList.remove('turn-highlight');
    } else {
      p2Box.classList.add('turn-highlight');
      p1Box.classList.remove('turn-highlight');
    }
  }

  function updatePlayerBoxes() {
    let [p1Name, p1Mark] = p1Box.querySelectorAll('.p1-name, .p1-mark');
    let [p2Name, p2Mark] = p2Box.querySelectorAll('.p2-name, .p2-mark');
    p1Name.textContent = players.p1.getName();
    p2Name.textContent = players.p2.getName();
    p1Mark.classList.add(String(players.p1.getMark()));
    p2Mark.classList.add(String(players.p2.getMark()));
  }

  function updateScores() {
    let p1Score = document.querySelector('.p1-score');
    let p2Score = document.querySelector('.p2-score');
    p1Score.textContent = players.p1.getWins();
    p2Score.textContent = players.p2.getWins();
  }

  let addGameBoardListener = () => {
    let markListener = (event) => {
      let target = event.target;

      if (target.className.startsWith('cell')) {
        game.playTurn(target.dataset.pos);
        updateBoard();

        if (['won', 'includes'].includes(game.getState())) {
          let message = document.querySelector('.modal.result .message');

          switch (game.getState()) {
            case 'won':
              let winner = game.getPlayers().getCurrent();
              let name = winner.getName();
              let moves = winner.getMoves();

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
  };

  (function addButtonListener() {
    container.addEventListener('click', (event) => {
      let target = event.target;
      let playerEntry = document.querySelector('.modal.player-entry');
      // let playerDetails;

      switch (target.className) {
        case 'play':
          if (players === null) {
            playerEntry.showModal();
          } else {
            clearBoard();
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
        // game.getPlayers().randomizeStartingPlayer();
        updatePlayerBoxes();
        addGameBoardListener();
      }

      if (target.className === 'reset') {
        clearBoard();
        game.reset();
        game.start();
        players = game.getPlayers();
        // game.getPlayers().randomizeStartingPlayer();
        updateScores();
        updatePlayerBoxes();
        addGameBoardListener();
      }

      if (target.className === 'close') {
        target.parentElement.parentElement.close();
      }
    });
  })();
})();

// displayController();

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
