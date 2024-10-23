const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// toEqual tests value equivalency (i.e., recursively, like a deep copy)
// toEqual ignores undefined values, use toStrictEqual instead
test('[sum(1, 0), sum(2, 3)] to equal [1, 5]', () => {
  expect([sum(1, 0), sum(2, 3)]).toEqual([1, 5]);
});

// not to negate
test('adds 1 + 2 to NOT equal 30', () => {
  expect(sum(1, 2)).not.toBe(30);
});

test('truthy/falsy tests', () => {
  const x = null;
  expect(x).toBeNull();
  expect(x).not.toBeUndefined();
  expect(x).toBeDefined();
  expect(x).not.toBeTruthy();
  expect(x).toBeFalsy();
});

test('comparison tests', () => {
  const [x, y] = [5, 10];
  expect(x).toBeLessThan(y);
  expect(x).toBeLessThanOrEqual(y);
  expect(x).not.toBeGreaterThan(y);
  expect(x).not.toBeGreaterThanOrEqual(y);
});

test('pattern matching, regex tests', () => {
  const string = 'abcdefg';
  const number = '73';
  expect(string).toMatch(/[a-z]+/g);
  expect(number).toMatch(/[0-9]+/g);
  expect(string).toMatch('abcdefg'); // strings work too
});

test('membership; element in collection tests', () => {
  let a = [2, 4, 6];
  expect(a).toContain(2);
  expect(a).not.toContain(1);
});

test('test errors', () => {
  let a = () => {
    throw new Error('ERROR123');
  };
  expect(() => a()).toThrow();
  expect(() => a()).toThrow('ERROR123'); // matching error message works
  expect(() => a()).toThrow(/ERROR[0-9]+/); // regex works too
});
