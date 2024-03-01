'use strict';


/** Returns the largest, most-frequently occuring number in the input array. */
function highestRank(arr) {
  let counts = {};
  let maxCount = null;
  let mostFrequent = null;
  
  for (let n of new Set(arr)) {
    counts[n] = arr.reduce((count, elem) => elem === n ? ++count : count, 0);
  }
  maxCount = Math.max(...Object.values(counts));
  mostFrequent = Object.keys(counts).filter(x => counts[x] === maxCount);
  mostFrequent = Math.max(...mostFrequent.map(x => +x));
  
  return mostFrequent;
}


console.assert(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) === 12);