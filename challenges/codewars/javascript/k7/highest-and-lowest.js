/** Returns a string with the highest and lowest number in the input string. */
function highAndLow(numbers){
  let numArray = numbers.split(' ').map(n => +n);
  return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
}