'use strict';

/** A: Function demonstrating closures/currying. */
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.assert(sum(1)(2) === 3);
console.assert(sum(5)(-1) === 4);
