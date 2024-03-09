// What are results of these expressions?
console.assert('' + 1 + 0 === '10', '#1');
console.assert('' - 1 + 0 === -1, '#2');
console.assert(true + false === 1, '#3');
console.assert(6 / '3' === 2, '#4');

console.assert('2' * '3' === 6, '#5');
console.assert(4 + 5 + 'px' === '9px', '#6');
console.assert('$' + 4 + 5 === '$45', '#7');
console.assert('4' - 2 === 2, '#8');

console.assert(isNaN('4px' - 2), '#9');
console.assert('  -9  ' + 5 === '  -9  5', '#10');
console.assert('  -9  ' - 5 === -14, '#11');
console.assert(null + 1 === 1, '#12');

console.assert(isNaN(undefined + 1), '#13');
console.assert(' \t \n' - 2 === -2, '#14');
