'use strict';

/**
 * Takes a string of dash or underscore-separated words and converts it to
 * camelCase.
 */
function toCamelCase(str) {
  let strArr = str.replaceAll('-', '_').split('_');
  strArr.map((w, i, a) =>
    i > 0 ? (a[i] = w[0].toUpperCase() + w.slice(1)) : w
  );
  return strArr.join('');
}
