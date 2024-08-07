import './style.css';
import { Dropdown } from './classes.js';

new Dropdown({ buttonSelector: '.menu-button1', menuSelector: '.menu1' });
new Dropdown({ buttonSelector: '.menu-button2', menuSelector: '.menu2' });

let imageCarousel = document.querySelector('section.image-carousel');
let carouselRoll = document.querySelector('.carousel-roll');

let rollPosition = 1;
let rollLength = document.querySelectorAll('.carousel-img').length;
let rollMin = 1;
let rollMax = rollLength - 2;

imageCarousel.addEventListener('click', (e) => {
  let className = e.target.className;
  let sign = className === 'carousel-nav-left' ? -1 : 1;

  if (className === 'carousel-nav-right') {
    rollPosition = wrapPosition(++rollPosition, sign, rollMin, rollMax);
    carouselRoll.style.transform = `translate(${-(rollPosition - 1) * 320}px)`;
  }

  if (className === 'carousel-nav-left') {
    rollPosition = wrapPosition(--rollPosition, sign, rollMin, rollMax);
    carouselRoll.style.transform = `translate(${-(rollPosition - 1) * 320}px)`;
  }
});

function wrapPosition(current, sign, minimum, maximum) {
  if (current < minimum) current = maximum;
  if (current > maximum) current = minimum;
  return current;
}
