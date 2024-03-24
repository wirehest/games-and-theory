/** Converts a 3x4 keypad input into a string of words. */
function phoneWords(input) {
  const KEYPAD = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    0: ' ',
  };
  if (input === '') return '';

  let commaSeparated = '';
  let [keyIndex, key] = [0, input[0]];
  let trimLength = KEYPAD[key].length - 1;

  for (let i = 1; i < input.length + 1; i++) {
    if (input[i - 1] !== input[i] || i - keyIndex > trimLength) {
      commaSeparated +=
        key.repeat(i - keyIndex) + (i < input.length ? ',' : '');
      [keyIndex, key] = [i, input[i]];
      trimLength = KEYPAD[key]?.length - 1;
    }
    continue;
  }
  return commaSeparated
    .split(',')
    .map((x) => KEYPAD[x[0]][x.length - 1])
    .join('');
}

console.assert(
  phoneWords('443355555566604466690277733099966688') === 'hello how are you',
  '1'
);
console.assert(phoneWords('44460208337777833777') === 'im a tester', '2');
console.assert(phoneWords('000') === '   ', '3');
console.assert(phoneWords('7999844666166') === 'python', '4');
console.assert(phoneWords('55886444833') === 'kumite', '5');
console.assert(phoneWords('271755533') === 'apple', '6');
console.assert(phoneWords('') === '', '7');
console.assert(phoneWords('111') === '', '8');
