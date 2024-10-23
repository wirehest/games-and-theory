import './style.css';
import { Dropdown, ImageCarousel } from './classes.js';

new Dropdown({ buttonSelector: '.menu-button1', menuSelector: '.menu1' });
new Dropdown({ buttonSelector: '.menu-button2', menuSelector: '.menu2' });

let carousel = new ImageCarousel([1, 2, 3, 4, 5], 'section.image-carousel');
