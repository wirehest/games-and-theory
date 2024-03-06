'use strict';

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items
// of arr.
// For instance:

// function unique(arr) {
//   /* your code */
// }

let strings = [
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

// alert( unique(strings) ); // Hare, Krishna, :-O

/** A: Returns an array with unique elements from the input array. */
function unique1(arr) {
  let uniqueArr = [];
  for (let elem of arr) {
    if (!uniqueArr.includes(elem)) uniqueArr.push(elem);
  }
  return uniqueArr;
}

/** A: Uses Set to return an array with unique elements.*/
function unique2(arr) {
  return Array.from(new Set(arr));
}

console.assert(JSON.stringify(unique1(strings)) === '["Hare","Krishna",":-O"]');
console.assert(JSON.stringify(unique2(strings)) === '["Hare","Krishna",":-O"]');
