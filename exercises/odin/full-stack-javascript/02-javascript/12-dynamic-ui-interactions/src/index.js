import './style.css';
import { Dropdown, ImageCarousel } from './classes.js';

new Dropdown({ buttonSelector: '.menu-button1', menuSelector: '.menu1' });
new Dropdown({ buttonSelector: '.menu-button2', menuSelector: '.menu2' });

let carousel = new ImageCarousel([1, 2, 3, 4, 5], 'section.image-carousel');

let imageCarousel = document.querySelector('section.image-carousel');
let carouselRoll = document.querySelector('.carousel-roll');

let rollLength = document.querySelectorAll('.carousel-img').length;
let rollMin = 1;
let rollMax = rollLength - 2;
let rollPosition = 1;

imageCarousel.addEventListener('click', (e) => {
  let target = e.target;
  let classList = [...target.classList];
  let className = target.className;
  let validNavClasses = ['carousel-nav-left', 'carousel-nav-right', 'dot'];
  let offset;

  if (validNavClasses.some((c) => classList.includes(c))) {
    if (classList.includes('dot')) {
      rollPosition = target.attributes['data-imgnum'].value;
      // TODO redraw
    } else {
      let sign = className === 'carousel-nav-left' ? -1 : 1;
      rollPosition = wrapPosition(rollPosition, sign, rollMin, rollMax);
    }

    offset = -(rollPosition - 1) * 320;
    carouselRoll.style.transform = `translate(${offset}px)`;
  }
});

function wrapPosition(current, sign, minimum, maximum) {
  current += sign;
  if (current < minimum) current = maximum;
  if (current > maximum) current = minimum;
  return current;
}
