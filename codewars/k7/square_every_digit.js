/** Squares each digit in input num, concatenates, then returns as int. */
function squareDigits(num) {
  let squared = []
  for (c of [...String(num)]) {
    squared.push(String(Number(c)**2));
  }
  squared = +squared.join('');
  return squared;
}

console.assert(squareDigits(9119) === 811181, "9119 -> 811181");
console.assert(squareDigits(0) === 0, "0 -> 0");