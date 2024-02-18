'use strict';

/** Returns whether an ISBN is valid. */
export const isValid = (isbn) => {
  // Common cleanup:
  isbn = [...isbn].filter((x) => x !== '-');

  // Exclude invalid ISBNs:
  if (
    isbn.length !== 10 ||
    ![...isbn.slice(0, 8)].every((x) => isFinite(x)) ||
    !'0123456789X'.includes(isbn.at(-1))
  )
    return false;

  // Check validity:
  return [...isbn].reduce(
    (a, c, i) => a + (c === 'X' ? 10 : +c) * (10 - i),
    0
  ) % 11
    ? false
    : true;
};

console.assert(isValid('3-598-21508-8') === true);
