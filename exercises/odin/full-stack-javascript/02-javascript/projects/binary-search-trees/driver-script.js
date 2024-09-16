import BinarySearchTree from './class-tree.js';

/** Returns a random number array. */
function genTestArray() {
  return Array.from({ length: 10 }, (x) => Math.floor(Math.random() * 100));
}

// Create a binary search tree from an array of random numbers < 100.
let testTree = new BinarySearchTree(genTestArray());

// Used with traversal.
let orderArr;

console.log('Starting tests ...\n');

// Confirm that the tree is balanced by calling isBalanced.
testTree.prettyPrint();
console.assert(testTree.isBalanced() === true, 'Assert 1');
console.log(`Tree is balanced: ${testTree.isBalanced()}`);

// Print out all elements in level, pre, post, and in order.
console.log('\nLevel-order, iterative:');
orderArr = [];
testTree.levelOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('Level-order, recursive:');
orderArr = [];
testTree.levelOrder((x) => orderArr.push(x.data), 'recursive');
console.warn(JSON.stringify(orderArr));

console.log('Pre-order:');
orderArr = [];
testTree.preOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('In-order:');
orderArr = [];
testTree.inOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('Post-order');
orderArr = [];
testTree.postOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

// Unbalance the tree by adding several numbers > 100.
console.log('\nAdding several numbers...');
for (let i of Array(16)) {
  testTree.insert(Math.floor(Math.random() * 100));
}
testTree.prettyPrint();

// Confirm that the tree is unbalanced by calling isBalanced.
console.assert(testTree.isBalanced() === false, 'Assert 2');
console.log(`Tree is balanced: ${testTree.isBalanced()}`);

// Balance the tree by calling rebalance.
console.log('\nRebalancing...');
testTree.rebalance();
testTree.prettyPrint();

// Confirm that the tree is balanced by calling isBalanced.
console.assert(testTree.isBalanced() === true, 'Assert 3');
console.log(`Tree is balanced: ${testTree.isBalanced()}`);

// Print out all elements in level, pre, post, and in order.
console.log('\nLevel-order, iterative:');
orderArr = [];
testTree.levelOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('Level-order, recursive:');
orderArr = [];
testTree.levelOrder((x) => orderArr.push(x.data), 'recursive');
console.warn(JSON.stringify(orderArr));

console.log('Pre-order:');
orderArr = [];
testTree.preOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('In-order:');
orderArr = [];
testTree.inOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));

console.log('Post-order');
orderArr = [];
testTree.postOrder((x) => orderArr.push(x.data));
console.warn(JSON.stringify(orderArr));
