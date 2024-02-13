'use strict';


/** 
 * 6-2.  Create a new class called Follower that extends from Actor and takes
 * three constructor parameters: startX, startY, and player. Pass the startX
 * and startY parameters to the superclass’s constructor, as we did in the
 * Player class, and save the player parameter as a property on the object, as
 * we did with the Player class’s hp property. 
 * Assume that in this game, a follower can’t be attacked, so it doesn’t need
 * hit points, and it also can’t attack. What it can do is follow the player
 * assigned to its player property. To do this, create a follow method that
 * updates the follower’s x- and y-coordinates to match those of its player
 * property.
 * 
 * 6-3.  Create instances of Player and Follower. Try moving the player, then
 * calling the follower’s follow method to confirm it works.
 */

class Actor {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  distanceTo(otherActor) {
    let dx = otherActor.x - this.x;
    let dy = otherActor.y - this.y;
    return Math.hypot(dx, dy);
  }
}

class Player extends Actor {
  constructor(startX, startY) {
    super(startX, startY);
     this.hp = 100;
  }
}

class Follower extends Actor {
  constructor(startX, startY, player) {
    super(startX, startY);
    this.pairedPlayer = player;
  }
  
  followPlayer() {
    this.x = this.pairedPlayer.x;
    this.y = this.pairedPlayer.y;
  }
}

let player1 = new Player(3, 4);
let follower1 = new Follower(0, 0, player1);

console.log(`player1 pos.: ${player1.x}, ${player1.y}`);
console.log(`follower1 pos.: ${follower1.x}, ${follower1.y}\n`);

console.log("Now moving player, and using follower follow method.\n")
player1.move(12, 7);
follower1.followPlayer();

console.log(`player1 pos.: ${player1.x}, ${player1.y}`);
console.log(`follower1 pos.: ${follower1.x}, ${follower1.y}`);
