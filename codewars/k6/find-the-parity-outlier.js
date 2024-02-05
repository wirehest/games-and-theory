/** 
 * Returns the outlier number in an array: either a lone odd or even number.
 */
function findOutlier(integers) {
  let counts = {even: 0, odd: 0};

  for (let element of integers.slice(-3)) {
    element % 2 ? counts.even++ : counts.odd++;
  }

  let outlierFilter = counts.even > counts.odd ? n => !(n % 2) : n => (n % 2); 
  return +integers.filter(n => outlierFilter(n));
}


console.assert(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) === 11);
console.assert(findOutlier([160, 3, 1719, 19, 11, 13, -21]) === 160);