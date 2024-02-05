/** Returns numbers divisible by 3 or 5 less than the input number. */
function solution(number) {
  'use strict';
  let multiplesArr = [];
  for (let i = 0; i < number; i++) {
    if (!(i % 3 && i % 5)) multiplesArr.push(i);
  }
  console.log(multiplesArr);
  return multiplesArr.reduce((a, c) => a + c, 0);
}