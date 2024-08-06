import './style.css';
import { Dropdown } from './classes.js';

new Dropdown({ buttonSelector: '.menu-button1', menuSelector: '.menu1' });
new Dropdown({ buttonSelector: '.menu-button2', menuSelector: '.menu2' });

function myCallback() {
  console.log('tick');
}

let imageCarousel = document.querySelector('section.image-carousel');
let carouselRoll = document.querySelector('.carousel-roll');

imageCarousel.addEventListener('click', (e) => {
  let className = e.target.className;

  if (className === 'carousel-nav-left') {
    carouselRoll.style.transform += 'translate(320px)';
  }

  if (className === 'carousel-nav-right') {
    carouselRoll.style.transform += 'translate(-320px)';
  }
});
