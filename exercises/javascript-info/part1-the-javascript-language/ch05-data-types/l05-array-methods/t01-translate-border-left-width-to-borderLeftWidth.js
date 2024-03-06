'use strict';

/** A: Takes a string of dash-separated words and converts it to camelCase. */
function camelize(str) {
  let strArr = str.split('-');
  strArr.map((w, i, a) =>
    i > 0 ? (a[i] = w[0].toUpperCase() + w.slice(1)) : w
  );
  console.log(strArr.join(''));
  return strArr.join('');
}

console.assert(camelize('background-color') === 'backgroundColor');
console.assert(camelize('list-style-image') === 'listStyleImage');
console.assert(camelize('-webkit-transition') === 'WebkitTransition');
