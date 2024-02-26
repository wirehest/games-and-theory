/** Returns phone numbers in a standard format */
export const clean = (num) => {
  const noSpacers = [...num].filter((x) => !' -().+'.includes(x));
  const twoToNine = '23456789';
  const numToText = {
    0: 'zero',
    1: 'one',
  };

  if ([...num].some((x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 122)) {
    throw new Error('Letters not permitted');
  }
  if (noSpacers.some((x) => '@:!'.includes(x))) {
    throw new Error('Punctuations not permitted');
  }
  if (noSpacers.length < 10) throw new Error('Incorrect number of digits');
  if (noSpacers.length > 11) throw new Error('More than 11 digits');

  if (noSpacers.length === 11) {
    if (noSpacers[0] !== '1') throw new Error('11 digits must start with 1');
  }

  const noCountry = noSpacers.slice(-10);
  if (!twoToNine.includes(noCountry[0])) {
    throw new Error(`Area code cannot start with ${numToText[noCountry[0]]}`);
  }
  if (!twoToNine.includes(noCountry[3])) {
    throw new Error(
      `Exchange code cannot start with ${numToText[noCountry[3]]}`
    );
  }
  return noCountry.join('');
};

console.assert(clean('(223) 456-7890') === '2234567890', '1');
console.assert(clean('223.456.7890') === '2234567890', '2');
console.assert(clean('223 456   7890   ') === '2234567890', '3');
console.assert(clean('(223) 456-7890') === '2234567890', '4');
console.assert(clean('+1 (223) 456-7890') === '2234567890', '5');
console.assert(clean('12234567890') === '2234567890', '6');

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
  'Incorrect error.'
);

// clean('32 123 456 7890') new Error('More than 11 digits')
// clean('(123) 456-7890') new Error('Area code cannot start with one')
// clean('(023) 456-7890') new Error('Area code cannot start with zero')
// clean('1 (223) 056-7890') new Error('Exchange code cannot start with zero')
// clean('1 (223) 156-7890') new Error('Exchange code cannot start with one')
