import { Travails } from './knights-travails.js';

function knightsMoves(origin, target) {
  return new Travails(origin, target);
}

knightsMoves([3, 3], [4, 3]);
knightsMoves([0, 0], [7, 7]);
knightsMoves([2, 5], [6, 2]);
