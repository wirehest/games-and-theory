import HashMap from './class-hashmap.js';
import LinkedList from './class-linked-list.js';

let testHash = new HashMap();

console.assert(testHash.length() === 0, '#1');
console.assert(JSON.stringify(testHash.keys()) === '[]', '#2');
console.assert(JSON.stringify(testHash.values()) === '[]', '#3');
// console.assert(JSON.stringify(testHash.entries()) === '[]', '#4');
console.assert(testHash.remove() === false, '#5');

testHash.set('key 1', 'value 1');
testHash.set('key 2', 2);
testHash.set('key 3', 3.0);
testHash.set('key 4', Symbol(4));
testHash.set('key 5', 'value 5');

console.assert(testHash._loadFactor > 0, '#6a');
console.assert(testHash.get('key 1') === 'value 1', '#6');
console.assert(testHash.get('key 2') === 2, '#7');
console.assert(testHash.has('key 3') === true, '#8');
console.assert(testHash.has('kagi 4') === false, '#9');

console.assert(testHash.remove('key 1') === true, '#10');
console.assert(testHash.length() === 4, '#11');

// let testLL = new LinkedList();
// testLL.append(1, 'A');
// testLL.append(2, 'B');
// testLL.append(3, 'C');
// testLL.append(4, 'D');
// testLL.append(5, 'E');
// let dummy = [[0, 'Z']];
// dummy = dummy.concat(testLL.entries());
// console.log(dummy);
