// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 times 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindromeProduct(digits) {
  let max = 10 ** digits - 1;
  let maxProduct = max ** 2;
  let min = 10 ** (digits - 1);
  let minProduct = min ** 2;
  let current = maxProduct;

  while (current >= minProduct) {
    if (isValidProduct(current, min, max)) return current;
    current--;
  }
  throw new Error('palindrome product not found');
}

function isValidProduct(current, min, max, factor = max) {
  if (factor < min) return false;

  if (
    current % factor === 0 &&
    current / factor >= min &&
    current / factor <= max
  ) {
    console.log(
      `${current} = ${factor} * ${current / factor}` +
        ` --- palindrome? ${isPalindrome(current)}`,
    );
    return isPalindrome(current);
  }

  // for TOP: recursion here
  return isValidProduct(current, min, max, --factor);
}

function isPalindrome(num) {
  let flipped = +(num + '').split('').reverse().join('');
  return num === flipped ? true : false;
}

console.log(isPalindromeProduct(3));

console.assert(isPalindrome(9009) === true, 'check 9009');
console.assert(isPalindrome(9099) === false, 'check 9099');
console.assert(isPalindrome(88) === true, 'check 88');
console.assert(isPalindrome(78) === false, 'check 78');
console.assert(isPalindrome(303) === true, 'check 303');
