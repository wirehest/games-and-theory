'use strict';


/** Deletes elements from the end of arr while count exceeds n, then returns. */
function deleteNth(arr, n) {
  for (let elem of arr) {
    while (arr.reduce((a, c) => c === elem ? ++a : a, 0) > n) {
      arr.splice(arr.lastIndexOf(elem), 1);
    }
  }
  return arr;
}