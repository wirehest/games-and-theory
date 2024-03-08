/** A: Adds decrement and value-setting properties to the generated function. */
function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = (value) => {
    return (counter.count = value);
  };
  counter.decrease = () => {
    return counter.count--;
  };

  return counter;
}

let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter.set(0)); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0
