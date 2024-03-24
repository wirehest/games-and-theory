/** Returns the first five characters of the input string. */
export const truncate = (input) => {
  let i = 0;
  let trimmed = '';

  // for...of loop iterates over Unicode code points instead of
  // UTF-16 code units allowing truncation by character.
  for (let char of input) {
    if (i === 5) break;
    trimmed += char;
    i++;
  }
  return trimmed;
};

console.assert(truncate('Hi') === 'Hi');
console.assert(truncate('Hello there') === 'Hello');
console.assert(truncate('brühe') === 'brühe');
console.assert(truncate('Bärteppich') === 'Bärte');
console.assert(truncate('Добър') === 'Добър');
console.assert(truncate('υγειά') === 'υγειά');
console.assert(truncate('a=πr²') === 'a=πr²');
console.assert(truncate('∅⊊ℕ⊊ℤ⊊ℚ⊊ℝ⊊ℂ') === '∅⊊ℕ⊊ℤ');
console.assert(truncate('💇') === '💇');
console.assert(truncate('Fly 🛫') === 'Fly 🛫');
console.assert(truncate('❄🌡🤧🤒🏥🕰😀') === '❄🌡🤧🤒🏥');
console.assert(truncate('🃎🂸🃅🃋🃍🃁🃊') === '🃎🂸🃅🃋🃍');
