'use strict';


/**
 * 6-1.  Create a new instance of Player called player2. Try calling move with
 * different values on player1 and player2. You’ll see that each object has its
 * own x and y properties, but that both objects have access to the move method.
 */

class Player {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

}

let player1 = new Player(0, 0);
let player2 = new Player(0, 0);

console.log(`player1: ${player1.x}, ${player1.y}`);
console.log(`player2: ${player2.x}, ${player2.y}`);

player1.move(5, 7);
player2.move(-2, 8);

console.log(`player1: ${player1.x}, ${player1.y}`);
console.log(`player2: ${player2.x}, ${player2.y}`);