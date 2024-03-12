// Can we change this by additional binding?
// What will be the output?

function f() {
  console.log(this.name);
}

f = f.bind({ name: 'John' }).bind({ name: 'Ann' });

f();

// A: Returns John. Bound functions can be further bound, but subsequent
// thisArgs are ignored. Only additional optional args are passed on.
