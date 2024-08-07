export class Dropdown {
  constructor({ buttonSelector, menuSelector }) {
    this.button = document.querySelector(buttonSelector);
    this.menu = document.querySelector(menuSelector);
    this.init();
  }

  init() {
    this.button.addEventListener('click', (e) => {
      this.menu.classList.toggle('invisible');
    });
  }
}

export class ImageCarousel {
  constructor() {}
}
