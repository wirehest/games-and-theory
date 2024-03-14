/** A: Returns whether a number is prime. */
function prime(n) {
  let prime = true;

  outer: for (let i = 2; i <= n; i++) {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        prime = false;
        break outer;
      }
    }
  }

  console.log(prime === true ? `${n} is prime` : `${n} not prime`);
  return prime;
}

console.assert(prime(2) == true, 'n = 2 true');
console.assert(prime(3) == true, 'n = 3 true');
console.assert(prime(4) == false, 'n = 4 false');
console.assert(prime(5) == true, 'n = 5 true');
console.assert(prime(6) == false, 'n = 6 false');
console.assert(prime(7) == true, 'n = 7 true');
