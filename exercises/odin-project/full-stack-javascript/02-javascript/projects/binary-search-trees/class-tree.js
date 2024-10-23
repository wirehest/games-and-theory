import TreeNode from './class-treenode.js';
import Queue from './class-queue.js';

export default class BinarySearchTree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  find(value) {
    let node = this.root;

    while (true) {
      if (node.data === value) return node;
      let nextNode = value < node.data ? 'left' : 'right';
      node = node[nextNode];
      if (node === null) return `${value} not found.`;
    }
  }

  insert(value) {
    let node = this.root;

    while (true) {
      if (node.data === value) return `${value} already in tree.`;
      let nextNode = value < node.data ? 'left' : 'right';
      if (node[nextNode] === null)
        return (node[nextNode] = new TreeNode(value));
      node = node[nextNode];
    }
  }

  deleteItem(value, node = this.root, parent = null) {
    if (node.data === value) {
      let childCount = [node.left, node.right].filter(
        (child) => child !== null,
      ).length;

      switch (childCount) {
        case 0:
          if (node === this.root) {
            this.root = null;
          } else if (parent.left.data === value) {
            parent.left = null;
          } else {
            parent.right = null;
          }
          break;
        case 1:
          if (node === this.root) {
            if (node.left === value) {
              this.root = node.right;
            } else {
              this.root = node.left;
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

          if (node === this.root) {
            this.root = successor;
          } else {
            if (parent.left === node) {
              parent.left = successor;
            } else {
              parent.right = successor;
            }
          }
          break;
      }
      return this.root;
    }
    let nextNode = value < node.data ? 'left' : 'right';
    return this.deleteItem(value, node[nextNode], node);
  }

  levelOrder(callback, mode = 'iterative') {
    if (callback === undefined) throw new Error('Callback required');
    if (this.root === null) throw new Error('Cannot traverse empty tree.');

    if (mode === 'iterative') {
      this.#levelOrderIterative(callback);
    } else if (mode === 'recursive') {
      this.#levelOrderRecursive(callback);
    } else {
      throw new Error(`Invalid mode: ${mode} called on levelOrder`);
    }
  }

  #levelOrderIterative(callback) {
    let discovered = new Queue(this.root);

    while (discovered.length > 0) {
      let node = discovered.dequeue();
      callback(node);
      [node.left, node.right]
        .filter((child) => child !== null)
        .forEach((child) => discovered.enqueue(child));
    }
  }

  #levelOrderRecursive(callback, discovered = new Queue(this.root)) {
    if (discovered.length === 0) return;

    let node = discovered.dequeue();
    callback(node);

    [node.left, node.right]
      .filter((child) => child !== null)
      .forEach((child) => discovered.enqueue(child));

    this.#levelOrderRecursive(callback, discovered);
  }

  preOrder(callback) {
    this.#depthFirstTraversal(callback, 'preOrder');
  }

  inOrder(callback) {
    this.#depthFirstTraversal(callback, 'inOrder');
  }

  postOrder(callback) {
    this.#depthFirstTraversal(callback, 'postOrder');
  }

  #depthFirstTraversal(callback, caller, node = this.root) {
    if (callback === undefined) throw new Error('Callback required');
    if (this.root === null) throw new Error('Cannot traverse empty tree.');

    if (caller === 'preOrder') callback(node);
    if (node.left !== null) {
      this.#depthFirstTraversal(callback, caller, node.left);
    }
    if (caller === 'inOrder') callback(node);
    if (node.right !== null) {
      this.#depthFirstTraversal(callback, caller, node.right);
    }
    if (caller === 'postOrder') callback(node);
  }

  // Returns the number of edges in the longest path
  // from a given node to a leaf node.
  height(value) {
    let node = this.find(value);

    if (node.left === null && node.right === null) return 0;

    let [leftHeight, rightHeight] = [0, 0];
    if (node.left !== null) {
      leftHeight = 1 + this.height(node.left.data);
    }
    if (node.right !== null) {
      rightHeight = 1 + this.height(node.right.data);
    }

    return Math.max(leftHeight, rightHeight);
  }

  // Returns the number of edges in the path from
  // a given node to the tree’s root node.
  depth(value, node = this.root, depth = 0) {
    // TODO: reuses find logic; refactor?
    if (node.data === value) return depth;

    let nextNode = value < node.data ? 'left' : 'right';
    if (node[nextNode] === null) return console.log(`${value} not in tree`);

    return this.depth(value, node[nextNode], ++depth);
  }

  isBalanced(node = this.root) {
    if (node === null) return 1;

    let [leftHeight, rightHeight] = [0, 0];
    if (node.left !== null) leftHeight = 1 + this.height(node.left.data);
    if (node.right !== null) rightHeight = 1 + this.height(node.right.data);
    let balanced = Math.abs(leftHeight - rightHeight) <= 1 ? 1 : 0;

    return !!(
      balanced *
      this.isBalanced(node.left) *
      this.isBalanced(node.right)
    );
  }

  rebalance() {
    let newArray = [];
    this.inOrder((e) => newArray.push(e.data));
    this.root = this.buildTree(newArray);
  }

  buildTree(array) {
    let length = array.length;

    if (!(array instanceof Array)) throw new Error('Need to provide array');
    if (array.length === 0) throw new Error('Need to provide non-empty array');

    array = this.#uniqueAndSort(array);

    let rootIndex = length % 2 === 0 ? length / 2 : --length / 2;
    let rootNode = new TreeNode(array[rootIndex]);

    if (length <= 1) return rootNode;

    let slices = { left: [0, rootIndex], right: [rootIndex + 1] };
    for (let side in slices) {
      let subarray = array.slice(...slices[side]);
      if (subarray.length > 0) rootNode[side] = this.buildTree(subarray);
    }

    return rootNode;
  }

  // Utility Methods

  /** Gets the replacement node when deleting a node with two children. */
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

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
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
