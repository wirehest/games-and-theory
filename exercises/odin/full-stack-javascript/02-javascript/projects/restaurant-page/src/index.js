import './style.css';
import './assets/images/icon-cart-arrow-down.svg';
import './assets/images/icon-truck-delivery.svg';
import mainBackground from './assets/images/chicken-background.jpg';
import imageUrlWings from './assets/images/menu-chicken-wings.jpg';
import imageUrlChixSandwich from './assets/images/menu-crispy-chix-sandwich.jpg';
import imageUrlPulledSandwich from './assets/images/menu-pulled-sandwich.jpg';
import imageUrlPopcorn from './assets/images/menu-popcorn-chicken.jpg';
import imageUrlTenders from './assets/images/menu-chicken-tenders.jpg';
import imageUrlDrumstick from './assets/images/menu-drumstick.jpg';
import imageUrlSides from './assets/images/menu-sides.jpg';
import imageUrlBeverages from './assets/images/menu-beverages.jpg';
import imageUrlDessert from './assets/images/menu-dessert.jpg';

let styles = getComputedStyle(document.documentElement);
let breakpoint = styles.getPropertyValue('--breakpoint');
let content = document.querySelector('#content');

const main = `<div class="home-container">
      <section>
        <h1>At Least You'll Have Chicken!</h1>
        <p>
          Unleash the flavor of Upper Blackrock Spire with Leeroy's Legendary
          Chicken - just $5.99 for a basket or $10 for a box, for a limited time
          only!
        </p>
        <div class="content-buttons">
          <button type="button" class="order-content">
            <span class="pickup-icon"></span>
            Order Pickup
          </button>
          <button type="button" class="order-content">
            <span class="deliver-icon"></span>
            Order Delivery
          </button>
        </div>
      </section>
      <div class="special">
        <p>Starting at</p>
        <div class="special-price">
          <span class="special-price-sym">$</span>
          <span class="special-price-dollars">5</span>
          <span class="special-price-cents">.99</span>
        </div>
      </div>
    </div>`;

(function addNavListeners() {
  let header = document.querySelector('header');
  let validButtons = ['menu', 'rewards', 'locations', 'catering', 'sign-in'];
  header.addEventListener('click', (event) => {
    let target = event.target;

    if (target.className === 'header-middle') {
      clearPage();
      drawPage(main);
    }

    if (validButtons.includes(target.name)) {
      clearPage();
      switch (target.name) {
        case 'menu':
          drawMenu();
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

function drawPage(innerMarkup) {
  content.style.background = `fixed center/cover url(${mainBackground})`;
  content.innerHTML = innerMarkup;
}

function drawMenu() {
  // TODO no bottom padding?
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();
  let menuItems = {
    "Leeroy's Legendary Chicken": imageUrlWings,
    'Buffalo Whelp Wings': imageUrlDrumstick,
    "Majordomo's Chicken Sandwich": imageUrlChixSandwich,
    'Pulled Pterrodax Sandwich': imageUrlPulledSandwich,
    'Tinker Town Tenders': imageUrlTenders,
    'Fel-Fried Popcorn Chicken': imageUrlPopcorn,
    Sides: imageUrlSides,
    Beverages: imageUrlBeverages,
    Dessert: imageUrlDessert,
  };
  let menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  for (let [name, image] of Object.entries(menuItems)) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.style.background = `top/contain no-repeat url(${image}) #fff`;
    menuItem.textContent = name;
    menuContainer.appendChild(menuItem);
    fragment.appendChild(menuContainer);
  }
  content.appendChild(fragment);
}

drawPage(main);
