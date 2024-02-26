/** Returns phone numbers in a standard format. */
export const clean = (num) => {
  const noSpacers = [...num].filter((x) => !' -().+'.includes(x));
  const twoToNine = '23456789';
  const numToText = {
    0: 'zero',
    1: 'one',
  };
  const testAlpha = noSpacers.some(
    (x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 122
  );
  const testPunct = noSpacers.some((x) => '@:!'.includes(x));
  const testTooShort = noSpacers.length < 10;
  const testTooLong = noSpacers.length > 11;
  const testCountryCode = noSpacers.length === 11 && noSpacers[0] !== '1';

  if (testAlpha) throw new Error('Letters not permitted');
  if (testPunct) throw new Error('Punctuations not permitted');
  if (testTooShort) throw new Error('Incorrect number of digits');
  if (testTooLong) throw new Error('More than 11 digits');
  if (testCountryCode) throw new Error('11 digits must start with 1');

  const noCountry = noSpacers.slice(-10);
  const area = numToText[noCountry[0]];
  const exch = numToText[noCountry[3]];

  if (area) throw new Error(`Area code cannot start with ${area}`);
  if (exch) throw new Error(`Exchange code cannot start with ${exch}`);

  return noCountry.join('');
};

console.assert(clean('(223) 456-7890') === '2234567890', 'Test 1');
console.assert(clean('223.456.7890') === '2234567890', 'Test 2');
console.assert(clean('223 456   7890   ') === '2234567890', 'Test 3');
console.assert(clean('(223) 456-7890') === '2234567890', 'Test 4');
console.assert(clean('+1 (223) 456-7890') === '2234567890', 'Test 5');
console.assert(clean('12234567890') === '2234567890', 'Test 6');

console.assert(
  (() => {
    try {
      clean('123-abc-7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error &&
        error.message.includes('Letters not permitted')
      );
    }
  })(),
  'Test 7: Incorrect error.'
);

console.assert(
  (() => {
    try {
      clean('32 123 456 7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error && error.message.includes('More than 11 digits')
      );
    }
  })(),
  'Test 8: Incorrect error.'
);

console.assert(
  (() => {
    try {
      clean('(123) 456-7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error &&
        error.message.includes('Area code cannot start with one')
      );
    }
  })(),
  'Test 9: Incorrect error.'
);

console.assert(
  (() => {
    try {
      clean('(023) 456-7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error &&
        error.message.includes('Area code cannot start with zero')
      );
    }
  })(),
  'Test 10: Incorrect error.'
);

console.assert(
  (() => {
    try {
      clean('1 (223) 056-7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error &&
        error.message.includes('Exchange code cannot start with zero')
      );
    }
  })(),
  'Test 11: Incorrect error.'
);

console.assert(
  (() => {
    try {
      clean('1 (223) 156-7890');
      return false;
    } catch (error) {
      return (
        error instanceof Error &&
        error.message.includes('Exchange code cannot start with one')
      );
    }
  })(),
  'Test 12: Incorrect error.'
);
