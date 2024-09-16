export default class TreeNode {
  _left = null;
  _right = null;

  constructor(value) {
    this._data = value;
  }

  set data(value) {
    this._data = value;
    return this;
  }

  get data() {
    return this._data;
  }

  set left(node) {
    this._left = node;
    return this;
  }

  get left() {
    return this._left;
  }

  set right(node) {
    this._right = node;
    return this;
  }

  get right() {
    return this._right;
  }
}
