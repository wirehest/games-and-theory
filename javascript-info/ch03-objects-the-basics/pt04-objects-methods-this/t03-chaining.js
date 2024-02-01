'use strict';

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    console.log(this.step);
  }
};

console.log("Showing ladder methods:");
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0


let chainableLadder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  }
};

console.log("Showing chainableLadder methods:");
chainableLadder.up().up().down().showStep().down().showStep(); // shows 1 then 0