'use strict';

// Write the function shuffle(array) that shuffles (randomly reorders) elements
// of the array.
// Multiple runs of shuffle may lead to different orders of elements.
// For instance:

let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3]
// can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability
// of each case.

function shuffle(arr) {
  let shuffled = [];
  for (let i = 0; i < arr.length; i++)
    shuffled.push(arr[Math.floor(Math.random() * arr.length)]);
  return shuffled;
}

for (let i = 0; i < 20; i++) {
  console.log(shuffle(arr));
}

// let count0 = 0;
// let count1 = 0;
// let count2 = 0;
// let countOther = 0;

// for (let i = 0; i < 100_000; i++) {
//   let roll = shuffle(arr);
//   roll === 0
//     ? count0++
//     : roll === 1
//     ? count1++
//     : roll === 2
//     ? count2++
//     : countOther++;
// }

// console.log(`${count0 / 1000} ${count1 / 1000} ${count2 / 1000}`);
