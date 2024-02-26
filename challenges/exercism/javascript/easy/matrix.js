/** Representation of a matrix. */
export class Matrix {
  constructor(matrixStr) {
    this.matrix = matrixStr
      .split('\n')
      .map((row) => row.split(' ').map((x) => +x));
    this.height = this.matrix.length;
    this.width = this.matrix.reduce((a, c) => (c.length > a ? c.length : a), 0);
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    // let transposed = [];
    // for (let y = 0; y < this.width; y++) {
    //   let col = [];
    //   for (let x = 0; x < this.height; x++) {
    //     col.push(this.matrix[x][y]);
    //   }
    //   transposed.push(col);
    // }
    // return rows[0].map((_, i) => rows.map((row) => row[i]));

    return this.matrix[0].map((_, i) => this.matrix.map((row) => row[i]));

    // return transposed;
  }
}

let mx = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6');

// console.log(mx.rows[0]);
// console.log(mx.rows[1]);
// console.log(mx.rows[2]);
// console.log(mx.rows[3]);

// console.log(mx.columns[0]);
// console.log(mx.columns[1]);
// console.log(mx.columns[2]);
// console.log(mx.columns[3]);
