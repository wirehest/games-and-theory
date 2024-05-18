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
      // [0, 1, 2].forEach((x) => {
      // });
    };
    let printGrid = () => console.log(grid);
    return { markGrid, printGrid };
  })();

  function player(name, mark) {
    return { name, mark };
  }

  function gameController(player1, player2) {
    // TODO add player names
    // TODO when game end, display results
    let marks = { X: true, O: true };
  }

  // board.printGrid();
  // board.markGrid(0, 0, 'X');
  // board.printGrid();
  // board.markGrid(0, 0, 'O');
})();
