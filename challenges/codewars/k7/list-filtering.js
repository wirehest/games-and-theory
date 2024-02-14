/** Returns non-string elements of an array. */
function filter_list(l) {
  return l.filter(element => typeof element !== 'string');
}

console.assert(String(filter_list([1,2,'a','b'])) === '1,2');
console.assert(String(filter_list([1,'a','b',0,15])) === '1,0,15');
console.assert(String(filter_list([1,2,'aasf','1','123',123]))
  == '1,2,123');
