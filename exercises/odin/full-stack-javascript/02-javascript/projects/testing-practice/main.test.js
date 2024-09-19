import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from './main.js';

// A capitalize function that takes a string and returns it with the first
// character capitalized.
test('capitalize("cavorting cats") should return "Cavorting cats"', () => {
  expect(capitalize('cavorting cats')).toBe('Cavorting cats');
});

test('capitalize("sailor") should return "Sailor"', () => {
  expect(capitalize('sailor')).toBe('Sailor');
});

// A reverseString function that takes a string and returns it reversed.
test('reverseString("abcdefg")' + ' should return "gfedcba"', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});

test(
  'reverseString("Test string, please ignore")' +
    ' should return "erongi esaelp ,gnirts tseT"',
  () => {
    expect(reverseString('Test string, please ignore')).toBe(
      'erongi esaelp ,gnirts tseT',
    );
  },
);

// A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply. Each of these functions should take
// two numbers and return the correct calculation.
let calc = new Calculator();

test('Calculator Object: 1 + 6 should equal 7.', () => {
  expect(calc.add(1, 6)).toBe(7);
});

test('Calculator Object: 8 - 12 should equal -4.', () => {
  expect(calc.subtract(8, 12)).toBe(-4);
});

test('Calculator Object: 128 / 4 should equal 32.', () => {
  expect(calc.divide(128, 4)).toBe(32);
});

test('Calculator Object: 8 * 8 should equal 64.', () => {
  expect(calc.multiply(8, 8)).toBe(64);
});

// A caesarCipher function that takes a string and a shift factor and returns
// it with each character “shifted”. Read more about how a Caesar cipher works.
test('caesarCipher("xyz", 3) should return "abc"', () => {
  expect(caesarCipher('xyz', 3)).toMatch('abc');
});
test('caesarCipher("HeLLo", 3) should return "KhOOr"', () => {
  expect(caesarCipher('HeLLo', 3)).toMatch('KhOOr');
});
test('caesarCipher("HeLLo", 3) should return "KhOOr"', () => {
  expect(caesarCipher('Hello, World!', 3)).toMatch('Khoor, Zruog!');
});

// An analyzeArray function that takes an array of numbers and returns an
// object with the following properties: average, min, max, and length.
test(
  'analyzeArray([1, 8, 3, 4, 2, 6]) should return ' +
    '{ average: 48, min: 20, max: 80, length: 5 }',
  () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  },
);

test(
  'analyzeArray([25, 20, 80, 80, 35]) should return' +
    '{ average: 48, min: 20, max: 80, length: 5 }',
  () => {
    expect(analyzeArray([25, 20, 80, 80, 35])).toStrictEqual({
      average: 48,
      min: 20,
      max: 80,
      length: 5,
    });
  },
);
