'use strict';


/** 
 * Checks whether the characters of str2 can be found in str2.
 * Counts matter.
 */
function scramble(str1, str2) {
  const str1Obj = buildObj(str1.toLowerCase());
  const str2Obj = buildObj(str2.toLowerCase());

  for (let k in str2Obj) {
    if (typeof str1Obj[k] === 'undefined' || str1Obj[k] < str2Obj[k]) return false;
  }
  return true;
}

function buildObj(str) {
  let o = {};
  for (let c of str) {
    o[c] = (o[c] || 0) + 1;
  }
  return o;
}