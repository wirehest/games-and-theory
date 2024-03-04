let i = 0;

setTimeout(() => {
  console.log(i);
}, 100); // Will print 100000000.

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100_000_000; j++) {
  i++;
}
