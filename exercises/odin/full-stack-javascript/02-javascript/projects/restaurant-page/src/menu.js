import imageUrlWings from './assets/images/menu-chicken-wings.jpg';
import imageUrlChixSandwich from './assets/images/menu-crispy-chix-sandwich.jpg';
import imageUrlPulledSandwich from './assets/images/menu-pulled-sandwich.jpg';
import imageUrlPopcorn from './assets/images/menu-popcorn-chicken.jpg';
import imageUrlTenders from './assets/images/menu-chicken-tenders.jpg';
import imageUrlDrumstick from './assets/images/menu-drumstick.jpg';
import imageUrlSides from './assets/images/menu-sides.jpg';
import imageUrlBeverages from './assets/images/menu-beverages.jpg';
import imageUrlDessert from './assets/images/menu-dessert.jpg';

export default function drawMenu() {
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
