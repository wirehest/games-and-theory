import './style.css';
import drawMain from './main.js';
import drawMenu from './menu.js';
import drawRewards from './rewards.js';
import drawLocations from './locations.js';
import drawCatering from './catering.js';
import drawSignin from './signin.js';

let styles = getComputedStyle(document.documentElement);
let breakpoint = styles.getPropertyValue('--breakpoint');
let content = document.querySelector('#content');

(function addNavListeners() {
  let header = document.querySelector('header');
  let validButtons = ['menu', 'rewards', 'locations', 'catering', 'sign-in'];
  header.addEventListener('click', (event) => {
    let target = event.target;

    if (target.className.includes('header-middle')) {
      clearPage();
      drawMain();
    }

    if (validButtons.includes(target.name)) {
      clearPage();
      switch (target.name) {
        case 'menu':
          drawMenu();
          break;
        case 'rewards':
          drawRewards();
          break;
        case 'locations':
          drawLocations();
          break;
        case 'catering':
          drawCatering();
          break;
        case 'sign-in':
          drawSignin();
          break;
      }
    }
  });
})();

function clearPage() {
  console.log(content.childNodes);
  content.style.background = '';
  for (let child of content.childNodes) {
    content.removeChild(child);
  }
}

drawMain();
