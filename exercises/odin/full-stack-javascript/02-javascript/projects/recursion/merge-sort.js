function mergeSort(arr) {
  let originalLength = arr.length;
  arr = divideIntoSubarrays(arr);

  while (arr[0].length !== originalLength) {
    arr = merge(arr);
  }

  return arr[0];
}

function divideIntoSubarrays(arr) {
  if (arr.length <= 1) return [arr];
  let popped = arr.pop();
  return [...divideIntoSubarrays(arr), [popped]];
}

function merge([left, right, ...rest]) {
  let sorted = [];

  // base case
  if (right === undefined) return [left];

  // merges smaller number from left/right
  while (left.length > 0 && right.length > 0) {
    if (left.at(0) > right.at(0)) sorted.push(right.shift());
    else sorted.push(left.shift());
  }

  // if one side empty, merges other side
  if (left.length === 0) sorted.push(...right);
  else sorted.push(...left);

  return [sorted, ...merge(rest)];
}

console.assert(
  JSON.stringify(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) === '[0,1,1,2,3,5,8,13]',
  'check test 1',
);

console.assert(
  JSON.stringify(mergeSort([105, 79, 100, 110]) === '[79,100,105,110]'),
  'check test 2',
);
