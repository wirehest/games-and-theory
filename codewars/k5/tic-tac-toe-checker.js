'use strict';

/**
 * Assesses the state of a tic-tac-toe game.
 * Specifically, returns:
 * -1 game is finished
 *  1 "X" won
 *  2 "O" won
 *  0 draw
 */
function isSolved(board) {
  const b = flatten(board);
  const blanks = b.filter((x) => x === 0).length;

  // Check if board is empty.
  if (blanks === 9) return -1;

  // Check diagonals.
  if (b[0] !== 0 && b[0] === b[4] && b[0] === b[8]) {
    return b[0];
  }
  if (b[2] !== 0 && b[2] === b[4] && b[2] === b[6]) {
    return b[2];
  }

  // Check horizontals.
  for (let i of [0, 3, 6]) {
    if (b[i] !== 0 && b[i] === b[i + 1] && b[i] === b[i + 2]) {
      return b[i];
    }
  }

  // Check verticals.
  for (let i of [0, 1, 2]) {
    if (b[i] !== 0 && b[i] === b[i + 3] && b[i] === b[i + 6]) {
      return b[i];
    }
  }

  // Check unfinished.
  console.log(blanks);
  return blanks === 0 ? 0 : -1;
}

// Custom array flatten function becuase kata doesn't support .flat() method.
function flatten(arr) {
  let flat = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      flat = flat.concat(flatten(elem));
    } else {
      flat.push(elem);
    }
  }
  return flat;
}
