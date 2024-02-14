'use strict';

/** Returns true if str contains ‘viagra’ or ‘XXX’, otherwise false. */
function checkSpam(str) {
  let spamFound = false;
  if (
    str.toLowerCase().includes('viagra') ||
    str.toLowerCase().includes('xxx')
  ) {
    spamFound = true;
  }
  return spamFound;
}

console.assert(checkSpam('buy ViAgRA now') === true);
console.assert(checkSpam('free xxxxx') === true);
console.assert(checkSpam('innocent rabbit') === false);
