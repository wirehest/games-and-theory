let grid = (function () {
  let marks = 0;
  let cells = new Array(9).fill(null);

  const countMarks = () => cells.filter((cell) => cell !== null).length;
  const getCells = () => cells;

  const resetCells = () => {
    cells.fill(null);
    moves = 0;
  };

  const markCell = (i, mark) => {
    if (cells[i] !== null) throw new Error('cell already marked');
    cells[i] = mark;
    marks++;
  };

  // returns undefined if no winner,
  // array of winning indices if winner
  const checkForWin = () => {
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

  const getName = () => name;
  const getMark = () => mark.toLowerCase();
  const getWins = () => String(wins).padStart(3, '0');
  const getMoves = () => moves;
  const addWin = () => wins++;
  const addMove = () => moves++;
  const resetMoves = () => (moves = 0);

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
  let p1, p2, currentPlayer;
  makePlayers();

  function makePlayers(p1Name = 'P1', p2Name = 'P2') {
    let [n1, n2] = [p1Name, p2Name].map((name) => {
      if (name.length > 8) {
        name = name.slice(0, 8);
      }
      return name;
    });
    p1 = p1Name.length === 0 ? makePlayer('P1', 'x') : makePlayer(n1, 'x');
    p2 = p2Name.length === 0 ? makePlayer('P2', 'o') : makePlayer(n2, 'o');
    currentPlayer = p1;
  }

  const getPlayers = () => {
    return {
      p1Name: p1.getName(),
      p1Wins: p1.getWins(),
      p2Name: p2.getName(),
      p2Wins: p2.getWins(),
      getCurrent: () => (currentPlayer === p1 ? 'p1' : 'p2'),
    };
  };

  const restart = () => {
    grid.resetCells();
    [p1, p2].forEach((p) => p.resetMoves());
    currentPlayer = p1;
  };

  const reset = () => {
    grid.resetCells();
    makePlayers();
    currentPlayer = p1;
  };

  const playTurn = (i) => {
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
    currentPlayer = currentPlayer === p1 ? p2 : p1;
  };
  return { makePlayers, getPlayers, restart, reset, playTurn };
}

(function displayController() {
  let game = gameController();
  let turnResult = null;
  let container = document.querySelector('.container');
  let resultModal = document.querySelector('.modal.result');
  let active = false;

  function updateBoard() {
    let domCells = document.querySelectorAll('.gameboard > .cell');
    let p = game.getPlayers();
    let [p1Box, p2Box] = document.querySelectorAll('.p1, .p2');

    (function clearDomCells() {
      domCells.forEach((domCell) =>
        domCell.classList.remove('x', 'o', 'win-highlight'),
      );
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
    })();

    (function updateNames() {
      let [p1Name, p2Name] = document.querySelectorAll('.p1-name, .p2-name');
      [p1Name.textContent, p2Name.textContent] = [p.p1Name, p.p2Name];
    })();

    (function highlightCurrentPlayer() {
      if (p.getCurrent() === 'p1') {
        p1Box.classList.add('turn-highlight');
        p2Box.classList.remove('turn-highlight');
      } else {
        p2Box.classList.add('turn-highlight');
        p1Box.classList.remove('turn-highlight');
      }
    })();

    (function highlightWinningCells() {
      if (turnResult?.[1]) {
        turnResult?.[1].forEach((cell) => {
          let winningCell = container.querySelector(`[data-pos="${cell}"]`);
          winningCell.classList.add('win-highlight');
        });
      }
    })();
  }

  function addGameListener() {
    container.addEventListener('click', markListener);
    active = true;
  }

  function markListener(event) {
    let target = event.target;

    if (target.className.startsWith('cell')) {
      turnResult = game.playTurn(target.dataset.pos);
      updateBoard();

      if (turnResult) {
        active = false;
        let message = resultModal.querySelector('.message');
        message.textContent = turnResult[0];
        resultModal.showModal();
        container.removeEventListener('click', markListener);
      }
    }
  }

  (function addNavListener() {
    let isFirstGame = true;
    container.addEventListener('click', (event) => {
      let target = event.target;
      let playersModal = document.querySelector('.modal.player-entry');
      let playersForm = playersModal.querySelector('form');
      let resultModal = document.querySelector('.modal.result');

      // main buttons
      if (target.className === 'play') {
        if (active) return;
        if (isFirstGame) {
          isFirstGame = false;
          playersModal.showModal();
        } else {
          game.restart();
          addGameListener();
        }
      }
      if (target.className === 'restart') {
        if (!active) return;
        game.restart();
        addGameListener();
      }
      if (target.className === 'reset') {
        active = false;
        game.reset();
        container.removeEventListener('click', markListener);
        isFirstGame = true;
      }

      // modal buttons
      if (target.className === 'start') {
        let { p1Name, p2Name } = Object.fromEntries(new FormData(playersForm));
        game.makePlayers(p1Name, p2Name);
        addGameListener();
        playersModal.close();
        playersForm.reset();
      }
      if (target.className === 'play-again') {
        game.restart();
        addGameListener();
        resultModal.close();
      }
      if (target.className === 'close') {
        active = false;
        resultModal.close();
      }
      if (target.className === 'cancel') playersModal.close();

      // common calls
      updateBoard();
    });
  })();
})();
