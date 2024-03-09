// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // A: true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // A: null (2)

delete animal.jumps;

console.log(rabbit.jumps); // A: undefined (3)
