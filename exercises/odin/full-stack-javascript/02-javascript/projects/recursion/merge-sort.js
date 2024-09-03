function mergeSort(array) {
  if (array.length < 0) throw new Error('invalid array');
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  let midpoint =
    array.length % 2 !== 0 ? (array.length - 1) / 2 : array.length / 2;

  let leftSubarray = array.slice(0, midpoint);
  let rightSubarray = array.slice(midpoint);

  return merge(mergeSort(leftSubarray), mergeSort(rightSubarray));
}

function merge(leftSubarray, rightSubarray) {
  let mergedAndSorted = [];

  while (leftSubarray.length > 0 && rightSubarray.length > 0) {
    if (leftSubarray.at(0) > rightSubarray.at(0)) {
      mergedAndSorted.push(rightSubarray.shift());
    } else {
      mergedAndSorted.push(leftSubarray.shift());
    }
  }

  if (leftSubarray.length === 0) {
    mergedAndSorted.push(...rightSubarray);
  } else {
    mergedAndSorted.push(...leftSubarray);
  }

  return mergedAndSorted;
}

console.assert(
  JSON.stringify(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) === '[0,1,1,2,3,5,8,13]',
  'check test 1',
);

console.assert(
  JSON.stringify(mergeSort([105, 79, 100, 110]) === '[79,100,105,110]'),
  'check test 2',
);

console.assert(JSON.stringify(mergeSort([])) === '[]', 'check test 3');
