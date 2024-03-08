/** A: Randomly reorders elements of the input array. */
function shuffle(arr) {
  let originalArr = [...arr];
  let shuffled = [];

  function getRandIndex(min, max) {
    let adjMin = Math.ceil(min);
    let adjMax = Math.floor(max);
    return Math.floor(Math.random() * (adjMax - adjMin) + adjMin);
  }

  while (originalArr.length > 0) {
    let i = getRandIndex(0, originalArr.length);
    shuffled.push(originalArr[i]);
    originalArr.splice(i, 1);
  }
  return shuffled;
}

let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
