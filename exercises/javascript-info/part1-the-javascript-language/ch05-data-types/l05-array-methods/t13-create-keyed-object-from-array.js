/** A: Uses reduce to create an object from an array. */
function groupById(arr) {
  return arr.reduce((acc, currRow) => {
    acc[currRow.id] = currRow;
    return acc;
  }, {});
}

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
console.log(usersById);
