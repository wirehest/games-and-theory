'use strict';
/** 
 * Returns the count of the number of times all the digits in the input number
 * must be multiplied before returning a single-digit product. 
 */
function persistence(num, recursions=0) {
  /** Checks whether num is a single digit number. */
  function oneDigit(num) {
    return String(num).length === 1 ? true : false;
  }

  if (oneDigit(num)) {
    return recursions;
  } else {
    num = String(num).split('').reduce((a, c) => a *= c);
    return persistence(num, ++recursions);
  } 
}
