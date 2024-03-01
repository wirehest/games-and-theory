'use strict';

/**
 * Takes an array of strings representing 1x1 plots. Xs represent land, Os
 * represent water. Returns the total length of the perimeter of the islands.
 *
 * Note: challenge limited to old Node version.
 * Cannot use optional chains (?.) nor null coalesce (??).
 */
function landPerimeter(arr) {
  const width = arr[0].length;
  const height = arr.length;
  let tally = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (arr[y][x] === 'X') {
        let sides = 4;
        try {
          (arr[y][x + 1] || 0) === 'X' ? sides-- : null;
        } catch (error) {}
        try {
          (arr[y][x - 1] || 0) === 'X' ? sides-- : null;
        } catch (error) {}
        try {
          (arr[y + 1][x] || 0) === 'X' ? sides-- : null;
        } catch (error) {}
        try {
          (arr[y - 1][x] || 0) === 'X' ? sides-- : null;
        } catch (error) {}
        tally += sides;
        continue;
      }
    }
  }
  return `Total land perimeter: ${tally}`;
}

console.assert(
  landPerimeter([
    'OXOOOX',
    'OXOXOO',
    'XXOOOX',
    'OXXXOO',
    'OOXOOX',
    'OXOOOO',
    'OOXOOX',
    'OOXOOO',
    'OXOOOO',
    'OXOOXX',
  ]) === 'Total land perimeter: 60',
  '1'
);

console.assert(
  landPerimeter([
    'OXOOO',
    'OOXXX',
    'OXXOO',
    'XOOOO',
    'XOOOO',
    'XXXOO',
    'XOXOO',
    'OOOXO',
    'OXOOX',
    'XOOOO',
    'OOOXO',
  ]) === 'Total land perimeter: 52',
  '2'
);

console.assert(
  landPerimeter([
    'XXXXXOOO',
    'OOXOOOOO',
    'OOOOOOXO',
    'XXXOOOXO',
    'OXOXXOOX',
  ]) === 'Total land perimeter: 40',
  '3'
);

console.assert(
  landPerimeter([
    'XOOOXOO',
    'OXOOOOO',
    'XOXOXOO',
    'OXOXXOO',
    'OOOOOXX',
    'OOOXOXX',
    'XXXXOXO',
  ]) === 'Total land perimeter: 54',
  '4'
);

console.assert(
  landPerimeter([
    'OOOOXO',
    'XOXOOX',
    'XXOXOX',
    'XOXOOO',
    'OOOOOO',
    'OOOXOO',
    'OOXXOO',
  ]) === 'Total land perimeter: 40',
  '5'
);
