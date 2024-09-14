// 2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder. What is the smallest positive number that is
// evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(range) {
  let [min, max] = range;

  // max is the smallest number divisible by max
  let i = max;

  while (true) {
    if (checkDivisibility2(i)) return i;
    i += max;
  }
}

// will contain all factors, but too slow; works for 1 to 10
function checkDivisibility(number, min, max, factor = max) {
  if (factor < min) return 1;
  console.log(`${number} divisible by ${factor}: `, !(number % factor));
  return !(number % factor) * checkDivisibility(number, min, max, --factor);
}

function checkDivisibility2(
  number,
  factors = [...Array(20).keys()],
  // factors = [20, 19, 18, 17, 16, 14, 13, 11],
) {
  if (factors.length === 0) return true;

  let factor = factors.pop();
  if (number % factor) return false;

  // for TOP: recursion here due to factors.pop() above
  return !(number % factor) * checkDivisibility2(number, factors);
}

let start = Date.now();
console.log(smallestMultiple([1, 20]));
let end = Date.now();
console.log(`time elapsed: ${(end - start) / 1000}s`);

console.assert(smallestMultiple([1, 10]) === 2520, '1 to 10 should be 2520');
