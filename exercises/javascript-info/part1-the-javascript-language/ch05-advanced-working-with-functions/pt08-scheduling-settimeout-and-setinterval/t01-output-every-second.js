/** A: Prints numbers in range via setInterval. */
function printNumbersInterval(from, to) {
  let i = from;
  const timerId = setInterval(() => {
    if (i === to) clearInterval(timerId);
    console.log(i++);
  }, 1000);
}

/** A: Prints numbers in range via 'nested' setTimeouts. */
function printNumbersTimeout(from, to) {
  let i = from;
  setTimeout(function timer() {
    console.log(i++);
    if (i <= to) setTimeout(timer, 1000);
  }, 1000);
}
console.log('via setInterval:');
printNumbersInterval(1, 5);

setTimeout(() => {
  console.log('via nested setTimeout:');
  printNumbersTimeout(1, 5);
}, 6000);
