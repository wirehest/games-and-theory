let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push(food);
    this.stomach = [food]; // A: Simple assignment. (*)
  },
};

let speedy = {
  // stomach: [], // (**)
  __proto__: hamster,
};

let lazy = {
  // stomach: [], // (**)
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple

// A. The stomach is found on the prototype, so all hamsters share a stomach.
// Either give each hamster a stomach (**), or use simple assignment (*).
