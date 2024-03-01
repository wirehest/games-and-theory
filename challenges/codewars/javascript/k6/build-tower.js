'use strict';


/** Returns a pyramid-shaped tower given a positive integer number of floors. */
function towerBuilder(nFloors) {
  let tower = [];
  
  for (let i = 0; i < nFloors; i++) {
    let stars = '*'.repeat(2*i + 1);
    let space = ' '.repeat(nFloors - i - 1);
    let floor = space + stars + space;
    
    tower.push(floor);
  }
  return tower;
}