'use strict';

let arr = [5, 2, 1, -10, 8];

/** A: Code to sort arr in descending order. */
arr.sort((a, b) => b - a);

console.assert(JSON.stringify(arr) === '[8,5,2,1,-10]');
