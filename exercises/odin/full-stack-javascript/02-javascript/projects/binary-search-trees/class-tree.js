import Node from './class-node.js';

// TODO:
// [ ] remove duplicate values from initial array
// [ ] initial array must be sorted
// [ ] always check for existing values before inserting

export default class BinarySearchTree {
  constructor(array) {
    this._array = array;
    this._root = this.buildTree(this._array);
  }

  buildTree(array) {
    // let self = this;
    let length = array.length;
    let rootIndex = length % 2 === 0 ? length / 2 : --length / 2;

    let rootNode = new Node(array[rootIndex]);
    if (length <= 1) return rootNode;

    let leftSubarray = array.slice(0, rootIndex);
    let rightSubarray = array.slice(rootIndex + 1);
    rootNode
      .setLeft(this.buildTree(leftSubarray))
      .setRight(this.buildTree(rightSubarray));

    return rootNode;
  }

  prettyPrint(node, prefix = '', isLeft = true) {
    // console.log(this);
    if (node === null) {
      return;
    }
    if (node._right !== null) {
      this.prettyPrint(
        node._right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node._data}`);
    if (node._left !== null) {
      this.prettyPrint(
        node._left,
        `${prefix}${isLeft ? '    ' : '│   '}`,
        true,
      );
    }
  }
}

// Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

// Write insert(value) and deleteItem(value) functions that insert/delete the given value. You’ll have to deal with several cases for delete, such as when a node has children or not. If you need additional resources, check out these two articles on inserting and deleting, or this video on BST inserting/removing with several visual examples.

// You may be tempted to implement these methods using the original input array used to build the tree, but it’s important for the efficiency of these operations that you don’t do this. If we refer back to the Big O Cheatsheet, we’ll see that binary search trees can insert/delete in O(log n) time, which is a significant performance boost over arrays for the same operations. To get this added efficiency, your implementation of these methods should traverse the tree and manipulate the nodes and their connections.

// Write a find(value) function that returns the node with the given value.

// Write a levelOrder(callback) function that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).

// Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.

// Write a height(node) function that returns the given node’s height. Height is defined as the number of edges in the longest path from a given node to a leaf node.

// Write a depth(node) function that returns the given node’s depth. Depth is defined as the number of edges in the path from a given node to the tree’s root node.

// Write an isBalanced function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

// Write a rebalance function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

// Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.
