'use strict';

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;

let x = 0;
let y = 150;

let moveRight = true;

function drawCircle(x, y) {
  ctx.fillStyle = 'rgb(0, 128, 255)';
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2, false);
  ctx.fill();
}

function update() {
  if (moveRight) {
    x += 10;
    moveRight = x === width ? !moveRight : moveRight;
  }

  if (!moveRight) {
    x -= 10;
    moveRight = x === 0 ? !moveRight : moveRight;
  }
  // x += 10;
  // x %= width;
  // y += 10;
  // y %= height;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  drawCircle(x /* % width */, y /* % height */);
}

setInterval(() => {
  update();
  draw();
}, 1);
