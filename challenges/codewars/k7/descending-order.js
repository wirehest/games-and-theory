/** Returns an integer with its digits sorted in reverse. */
function descendingOrder(n){
  let sortedNum = +String(n).split('').sort().reverse().join('');
  return sortedNum;
}

console.assert(descendingOrder(42145) === 54421);