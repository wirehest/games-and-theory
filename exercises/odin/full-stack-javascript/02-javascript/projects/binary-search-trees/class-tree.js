import Node from './class-node.js';

export default class BinarySearchTree {
  constructor(array) {
    this._root = this.buildTree(array);
  }

  find(value, node = this._root) {
    if (node.data === value) return node;

    let nextNode = value < node.data ? 'left' : 'right';
    if (node[nextNode] === null) return console.log(`${value} not in tree`);

    return this.find(value, node[nextNode]);
  }

  insert(value, node = this._root) {
    if (node.data === value) return console.log(`${value} already in tree`);

    let nextNode = value < node.data ? 'left' : 'right';
    if (node[nextNode] === null) return (node[nextNode] = new Node(value));

    return this.insert(value, node[nextNode]);
  }

  deleteItem(value, node = this._root, parent = null) {
    if (node.data === value) {
      let childCount = [node.left, node.right].filter(
        (child) => child !== null,
      ).length;

      switch (childCount) {
        case 0:
          if (node === this._root) {
            this._root = null;
          } else if (parent.left.data === value) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          break;
        case 1:
          if (node === this._root) {
            if (node.left === value) {
              this._root = node.right;
            } else {
              this._root = node.left;
            }
          } else if (parent.left.data === value) {
            if (node.left !== null) {
              parent.left = node.left;
            } else {
              parent.left = node.right;
            }
          } else {
            if (node.left !== null) {
              parent.right = node.left;
            } else {
              parent.right = node.right;
            }
          }
          break;
        case 2:
          let { successor, successorParent } = this.#getSuccessorNode(
            node.right,
          );
          if (successor === successorParent) {
            return console.log('successor = successorParent');
          }

          successorParent.left = successor.right;
          successor.left = node.left;
          successor.right = node.right;

          if (node === this._root) {
            this._root = successor;
          } else {
            if (parent.left === node) {
              parent.left = successor;
            } else {
              parent.right = successor;
            }
          }

          // console.log(successor);
          break;
      }

      return this._root;
    }

    let nextNode = value < node.data ? 'left' : 'right';
    return this.deleteItem(value, node[nextNode], node);
  }

  levelOrder(callback, mode = 'iterative') {
    // TODO:
    // need to create queue class to implement this
    // - queue node, enqueue children, then queue child node #1 ...
    switch (mode) {
      case 'iterative':
        break;
      case 'recursive':
        break;
      default:
        throw new Error(`Invalid mode: ${mode} called on levelOrder`);
    }
  }

  inOrder() {}

  // Returns the number of edges in the longest path
  // from a given node to a leaf node.
  height(value, node = this.find(value), height = 0) {
    if (node.left === null && node.right === null) return height;

    let leftHeight, rightHeight;
    if (node.left !== null) return this.height(value, node.left, ++height);
    if (node.right !== null) return this.height(value, node.right, ++height);

    return Math.max(leftHeight, rightHeight);
  }

  // Returns the number of edges in the path from
  // a given node to the tree’s root node.
  depth(value, node = this._root, depth = 0) {
    // TODO: reuses find logic; refactor?
    if (node.data === value) return depth;

    let nextNode = value < node.data ? 'left' : 'right';
    if (node[nextNode] === null) return console.log(`${value} not in tree`);

    return this.depth(value, node[nextNode], ++depth);
  }

  isBalanced() {}

  buildTree(array) {
    array = this.#uniqueAndSort(array);

    let length = array.length;
    let rootIndex = length % 2 === 0 ? length / 2 : --length / 2;

    let rootNode = new Node(array?.[rootIndex] ?? null);
    if (length <= 1) return rootNode;

    let leftSubarray = array.slice(0, rootIndex);
    if (leftSubarray.length > 0) {
      rootNode.left = this.buildTree(leftSubarray);
    }

    let rightSubarray = array.slice(rootIndex + 1);
    if (rightSubarray.length > 0) {
      rootNode.right = this.buildTree(rightSubarray);
    }

    return rootNode;
  }

  /* utility methods */

  // gets the replacement node when deleting a node with two children
  #getSuccessorNode(node, parent = null) {
    if (node.left === null) {
      return { successor: node, successorParent: parent };
    }
    return this.#getSuccessorNode(node.left, node);
  }

  #uniqueAndSort(array) {
    // NOTE: strings and chars will sort according to UTF-16 codes
    return [...new Set(array)].sort((a, b) => a - b);
  }

  prettyPrint(node = this._root, prefix = '', isLeft = true) {
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

// Write a levelOrder(callback) function that accepts a callback function as its parameter. levelOrder should traverse the tree in breadth-first level order and call the callback on each node as it traverses, passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays. levelOrder may be implemented using either iteration or recursion (try implementing both!). If no callback function is provided, throw an Error reporting that a callback is required. Tip: You will want to use an array acting as a queue to keep track of all the child nodes that you have yet to traverse and to add new ones to the list (video on level order traversal).

// Write inOrder(callback), preOrder(callback), and postOrder(callback) functions that also accept a callback as a parameter. Each of these functions should traverse the tree in their respective depth-first order and pass each node to the provided callback. The functions should throw an Error if no callback is given as an argument, like with levelOrder.

// Write an isBalanced function that checks if the tree is balanced. A balanced tree is one where the difference between heights of the left subtree and the right subtree of every node is not more than 1.

// Write a rebalance function that rebalances an unbalanced tree. Tip: You’ll want to use a traversal method to provide a new array to the buildTree function.

// Tip: If you would like to visualize your binary search tree, here is a prettyPrint() function that will console.log your tree in a structured format. This function will expect to receive the root of your tree as the value for the node parameter.
