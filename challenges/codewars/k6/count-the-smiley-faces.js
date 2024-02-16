'use strict';

/**
 * Returns the count of smileys found in the input array.
 * Smileys have the following structure:
 *
 * Eyes required, either : or ;
 * Nose optional, either  - or ~
 * Mouth required, either ) or D
 */
function countSmileys(arr) {
  const pattern = /[:|;]{1}[-|~]?[)|D]{1}/gu;

  return [...arr.join(' ').matchAll(pattern)].length;
}

console.assert(countSmileys([':)', ';(', ';}', ':-D']) === 2);
console.assert(countSmileys([';D', ':-(', ':-)', ';~)']) === 3);
console.assert(countSmileys([';]', ':[', ';*', ':$', ';-D']) === 1);
