let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head, // A1.
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table, // A1.
};

let pockets = {
  money: 2000,
  __proto__: bed, // A1.
};

console.assert(pockets.pen === 3);
console.assert(bed.glasses === 1);

let start = Date.now();
console.log(`pockets.glasses: ${pockets.glasses}`);
let end = Date.now();
console.log((end - start) / 1_000);

start = Date.now();
console.log(`head.glasses: ${head.glasses}`);
end = Date.now();
console.log((end - start) / 1_000);

// 1. Use __proto__ to assign prototypes in a way that any property lookup will
// follow the path: pockets → bed → table → head. For instance, pockets.pen
// should be 3 (found in table), and bed.glasses should be 1 (found in head).

// 2. Answer the question: is it faster to get glasses as pockets.glasses or
// head.glasses? Benchmark if needed.
// A: Technically, accessing the property from the owning-object is faster.
// Shows 0.005 to 0.01 second delay accessing pocket.glasses vs head.glasses.
// Practically no difference.
