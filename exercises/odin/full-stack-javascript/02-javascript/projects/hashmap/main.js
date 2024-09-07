import HashMap from './class-hashmap.js';

let test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.assert(test._loadFactor === 0.75, 'load factor should be 0.75');

console.assert(test.length() === 12, 'length should be 12');
console.assert(test.get('apple') === 'red', 'apple should retrieve red');

test.set('apple', 'fuji');
console.assert(test.get('apple') === 'fuji', 'apple should retrieve fuji');
console.assert(test.get('jacket') === 'blue', 'jacket should retrieve blue');
test.set('jacket', 'full-metal');
console.assert(
  test.get('jacket') === 'full-metal',
  'jacket should retrieve full-metal',
);
console.assert(
  test.length() === 12,
  'length after set() calls should not change',
);

const oldCapacity = test._capacity;
test.set('moon', 'silver');

console.assert(
  test._capacity === oldCapcity * 2,
  'buckets should have been increased',
);

// After that, populate your hash map with the last node below (doing this will make your hash map exceed your current load factor, hence expanding your buckets and growing your hash map):

// If you have implemented your hash map correctly, the capacity of your new hash map will drop well below your load factor and you will notice that the nodes in your hash map are spread much evenly among your buckets.

// With your new hash map, try overwriting a few nodes using set(key, value). Again, this should only over-write existing values of your nodes.

// Test the other methods of your hash maps such as get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries() to check if they are still working as expected after expanding your hash map.
