/** Returns the length of the shortest word in the input string. */
function findShort(s){
  let strArray = s.split(' ');
  let minLength = Infinity;

  for (let str of strArray) {
    if (str.length === 1) {
      minLength = 1;
      break;
    } else if (str.length < minLength) {
      minLength = str.length;
    }
  }
  return minLength;
}


console.assert(findShort("bitcoin take over the world maybe who knows "
  + "perhaps") === 3);
console.assert(findShort("turns out random test cases are easier than "
  + "writing out basic ones") === 3);
console.assert(findShort("Let's travel abroad shall we") === 2);
