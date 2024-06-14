import './style.css';

import drawMain from './main.js';
import drawMenu from './menu.js';
import drawRewards from './rewards.js';
import drawCatering from './catering.js';

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
          break;
        case 'catering':
          drawCatering();
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

// function drawPage(innerMarkup) {
//   content.style.background = `fixed center/cover url(${mainBackground})`;
//   content.innerHTML = innerMarkup;
// }

drawMain();
