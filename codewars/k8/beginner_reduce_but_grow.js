/** Returns the product of all elements of the input array. */
function grow(x){
  return x.reduce((accum, currVal) => accum * currVal);
}


console.assert(grow([1, 2, 3, 4]) === 24);