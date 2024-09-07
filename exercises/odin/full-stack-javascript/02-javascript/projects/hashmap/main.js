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
  test._capacity === oldCapacity * 2,
  `test capacity should have doubled: ${oldCapacity} -> ${oldCapacity * 2}`,
);

test.set('hat', 'fedora');
test.set('dog', 'canine');
test.set('elephant', 'pachyderm');
console.assert(test.get('hat') === 'fedora', 'hat should retrieve fedora');
console.assert(test.get('dog') === 'canine', 'dog should retrieve canine');
console.assert(
  test.get('elephant') === 'pachyderm',
  'elephant should retrieve pachderm',
);

console.assert(test.has('loopy') === false, 'get(loopy) should return false');
console.assert(
  test.has('elephant') === true,
  'get(elephant) should return true',
);
console.assert(
  test.remove('dictionary') === false,
  'remove(dictionary) should be false',
);
console.assert(test.remove('apple') === true, 'remove(apple) should be true');
console.assert(test.length() === 10, 'length should return 10');

console.assert(
  JSON.stringify(test.keys()) ===
    '["banana","carrot","kite","frog","grape","elephant","ice cream","moon","dog","hat"]',
  'check keys() output)',
);
console.assert(
  JSON.stringify(test.values()) ===
    '["yellow","orange","pink","green","purple","pachyderm","white","silver","canine","fedora"]',
  'check values() output',
);
console.assert(
  JSON.stringify(test.entries()) ===
    '[["banana","yellow"],["carrot","orange"],["kite","pink"],["frog","green"],["grape","purple"],["elephant","pachyderm"],["ice cream","white"],["moon","silver"],["dog","canine"],["hat","fedora"]]',
  'check entries() output',
);
