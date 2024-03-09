// Comparisons
function section09Task01() {
  console.log('\nCh. 1-9, Task 1:');
  console.log(
    'Used console.assert() to answer questions.\nIf nothing appears,' +
      ' all answers were correct.'
  );

  console.assert(5 > 4 === true, `5 > 4`);
  console.assert('apple' > 'pineapple' === false, `"apple" > "pineapple"`);
  console.assert('2' > '12' === true, `"2" > "12"`);
  console.assert((undefined == null) === true, `undefined == null`);
  console.assert((undefined === null) === false, `undefined === null`);
  console.assert((null == '\n0\n') === false, `null == "\n0\n"`);
  console.assert((null === +'\n0\n') === false, `null === +"\n0\n"`);
}
section09Task01();
