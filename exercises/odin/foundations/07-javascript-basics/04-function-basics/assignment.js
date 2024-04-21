function add7(num) {
  return num + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function capitalize(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}

function lastLetter(str) {
  return str.at(-1);
}

console.log('add7(3) = ' + add7(3));
console.log('multiply(2, 4) = ' + multiply(2, 4));
console.log("capitalize('hello') = " + capitalize('hello'));
console.log("lastLetter('abcd') = " + lastLetter('abcd'));
