import './style.css';

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');
menuButton.addEventListener('click', (e) => {
  menu.classList.toggle(invisible);
});
