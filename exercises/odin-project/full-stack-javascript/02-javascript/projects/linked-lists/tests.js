import LinkedList from './class-linked-list.js';
import Node from './class-node.js';

let testLinkedList = new LinkedList();
console.assert(
  testLinkedList.find(3) === undefined,
  '#0-a (will show error in console)',
);
console.assert(
  testLinkedList.contains(3) === undefined,
  '#0-b (will show error in console)',
);
console.assert(
  testLinkedList.toString() === undefined,
  '#0-c (will show error in console)',
);
console.assert(
  testLinkedList.insertAt('X', 5) === undefined,
  '#0-d (will show error in console)',
);

testLinkedList.append(1);
console.assert(testLinkedList.size === 1, '#1');
console.assert(testLinkedList.head.value === 1, '#2');
console.assert(testLinkedList.tail.value === 1, '#3');
testLinkedList.append(2);
console.assert(testLinkedList.size === 2, '#4');
console.assert(testLinkedList.head.value === 1, '#5');
console.assert(testLinkedList.tail.value === 2, '#6');
testLinkedList.prepend(3);
console.assert(testLinkedList.size === 3, '#7');
console.assert(testLinkedList.head.value === 3, '#8');
console.assert(testLinkedList.tail.value === 2, '#9');
console.assert(
  JSON.stringify(testLinkedList.at(0), replacer) ===
    '{"_value":3,"_nextNode":"Node"}',
  '#10',
);
console.assert(
  JSON.stringify(testLinkedList.at(1), replacer) ===
    '{"_value":1,"_nextNode":"Node"}',
  '#11',
);
console.assert(
  JSON.stringify(testLinkedList.at(2), replacer) ===
    '{"_value":2,"_nextNode":null}',
  '#12',
);

console.assert(testLinkedList.find(3) === 0, '#13');
console.assert(testLinkedList.contains(3) === true, '#13b');
console.assert(testLinkedList.find(2) === 2, '#14');
console.assert(testLinkedList.find('X') === null, '#15');
console.assert(testLinkedList.contains('X') === false, '#15b');

console.assert(testLinkedList.pop() === 2, '#16');

console.assert(testLinkedList.toString() === '( 3 ) -> ( 1 ) -> null', '#17');
console.assert(testLinkedList.size === 2, '#18');
testLinkedList.append('Duck, Goose');
console.assert(
  testLinkedList.toString() === '( 3 ) -> ( 1 ) -> ( Duck, Goose ) -> null',
  '#19',
);
testLinkedList.insertAt('Duck', 2);
console.assert(
  testLinkedList.toString() ===
    '( 3 ) -> ( 1 ) -> ( Duck ) -> ( Duck, Goose ) -> null',
  '#20',
);
console.assert(testLinkedList.size === 4, '#21');
testLinkedList.removeAt(3);
console.assert(
  testLinkedList.toString() === '( 3 ) -> ( 1 ) -> ( Duck ) -> null',
  '#22',
);
testLinkedList.removeAt(0);
console.assert(
  testLinkedList.toString() === '( 1 ) -> ( Duck ) -> null',
  '#23',
);
testLinkedList.insertAt('Horse', 0);
console.assert(
  testLinkedList.toString() === '( Horse ) -> ( 1 ) -> ( Duck ) -> null',
  '#24',
);

// replacer to hide nested nextNodes
function replacer(key, value) {
  if (key !== '') {
    if (value instanceof Node) {
      return 'Node';
    }
  }
  return value;
}
