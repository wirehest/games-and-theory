/** Returns the number of IP addresses within the given range. */
function ipsBetween(start, end) {
  const startArr = start.split('.');
  const endArr = end.split('.');
  let delta = [];

  for (let i = 0; i < 4; i++) {
    delta.push(endArr[i] - startArr[i]);
  }
  return delta.reduce((acc, v, i) => acc + v * 256 ** (3 - i), 0);
}

console.assert(ipsBetween('150.0.0.0', '150.0.0.1') === 1);
console.assert(ipsBetween('10.0.0.0', '10.0.0.50') === 50);
console.assert(ipsBetween('20.0.0.10', '20.0.1.0') === 246);
console.assert(ipsBetween('10.11.12.13', '10.11.13.0') === 243);
console.assert(ipsBetween('160.0.0.0', '160.0.1.0') === 256);
console.assert(ipsBetween('170.0.0.0', '170.1.0.0') === 65536);
console.assert(ipsBetween('50.0.0.0', '50.1.1.1') === 65793);
console.assert(ipsBetween('180.0.0.0', '181.0.0.0') === 16777216);
console.assert(ipsBetween('1.2.3.4', '5.6.7.8') === 67372036);
console.assert(ipsBetween('0.0.0.0', '255.255.255.255') === 2 ** 32 - 1);
