'use strict';

/**
 * Takes an array of cardinal directions and Removes pairs of directions that
 * do not result in a net position change. E.g., NORTH immediately followed by
 * SOUTH.
 */
function dirReduc(arr) {
  const badDirex = {
    WEST: 'EAST',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    NORTH: 'SOUTH',
  };
  arr.reverse();
  for (let i = arr.length - 1; i >= 0; i--) {
    if (badDirex[arr[i]] === arr[i + 1]) {
      arr.splice(i, 2);
    }
  }
  return arr.reverse();
}
