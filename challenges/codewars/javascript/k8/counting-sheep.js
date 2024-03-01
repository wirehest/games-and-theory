/** Returns count of true in input array. */
function countSheeps(sheep) {
  let count = 0;
  for (let s of sheep) {
    count += (s === true) ? 1 : 0;
  };

  return count;
}


console.assert(countSheeps([
  true, true, true, false, 
  true, true, true, true, 
  true, false, true, false, 
  true, false, false, true, 
  true, true, true, true,
  false, false, true, true
  ]) === 17
);