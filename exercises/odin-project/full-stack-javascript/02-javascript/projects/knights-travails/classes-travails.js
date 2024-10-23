export { Travails };

class Travails {
  length = 0;
  root = null;

  constructor(origin, target) {
    this.board = this.#makeBoard();
    this.origin = JSON.stringify(origin);
    this.target = JSON.stringify(target);

    this.init();
  }

  init() {
    [this.origin, this.target].forEach((square) => {
      if (!this.isValidSquare(square)) {
        throw new Error('Double-check start and end coordinates.');
      }
    });
    this.removeFromBoard(this.origin);
    this.root = new TravailNode(this.origin);
    this.buildTree();
    this.pathToTarget();
  }

  pathToTarget(node = this.root, path = []) {
    path.push(node.start);

    if (node.start === this.target) {
      console.log(`knightsMoves from ${this.origin} to ${this.target}.`);
      console.log(`You made it in ${path.length - 1} moves! The path:`);
      for (let [i, square] of path.entries()) {
        let count = i === 0 ? 'Start' : `Move ${i}`;
        console.log(JSON.parse(square), count);
      }
      console.log();
    }

    if (node.moves > 0) {
      for (let move of node.moveKeys) {
        this.pathToTarget(node[move], path);
        path.pop();
      }
    }
  }

  buildTree(queue = [this.root]) {
    if (!queue.length) return;
    let fromNode = queue.shift();

    [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ].forEach((move) => {
      let square = this.moveKnight(fromNode.start, move);
      if (this.isValidSquare(square)) {
        // NOTE: Can possibly end tree creation early here.
        this.removeFromBoard(square);
        queue.push(fromNode.addMove(square));
      }
    });

    this.buildTree(queue);
  }

  isValidSquare(square) {
    let boardIndex = this.board.findIndex((position) => position === square);

    // NOTE: Built-in findIndex method returns -1 if value not found
    if (boardIndex >= 0) {
      return true;
    }
    return false;
  }

  removeFromBoard(square) {
    let boardIndex = this.board.findIndex((position) => position === square);
    return this.board.splice(boardIndex, 1);
  }

  moveKnight(fromSquare, move) {
    fromSquare = JSON.parse(fromSquare);
    console.assert(
      fromSquare instanceof Array,
      'moveKnight #1: fromSquare should be revived Array.',
    );

    let [x, y] = fromSquare;
    let [a, b] = move;
    return JSON.stringify([x + a, y + b]);
  }

  #makeBoard() {
    let chessboard = [];
    for (let x of [...Array(8).keys()]) {
      for (let y of [...Array(8).keys()]) {
        chessboard.push(JSON.stringify([x, y]));
      }
    }
    return chessboard;
  }
}

class TravailNode {
  #moves = 0;

  constructor(square) {
    console.assert(
      typeof square === 'string',
      'TravailNode #1: input coordinates need to be in string format.',
    );
    this.start = square;
  }

  set moves(_) {
    throw new Error('Cannot set moves directly.');
  }

  get moves() {
    return this.#moves;
  }

  get moveKeys() {
    return Object.getOwnPropertyNames(this).filter(
      (propName) => propName !== 'start',
    );
  }

  addMove(square) {
    let move = `move${++this.#moves}`;
    this[move] = new TravailNode(square);
    return this[move];
  }
}
