'use strict';

/** A: Uses Set to return unique values of an array. */
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.assert(JSON.stringify(unique(values)) === '["Hare","Krishna",":-O"]');
