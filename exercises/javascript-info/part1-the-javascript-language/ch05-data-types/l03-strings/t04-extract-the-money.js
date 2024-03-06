'use strict';

/** Strips the leading $ sign from a string and returns as a number. */
function extractCurrencyValue(str) {
  return +str.slice(1);
}
