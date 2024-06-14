import cateringBackground from './assets/images/catering-background.jpg';

export default function drawCatering() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let caterContainer = document.createElement('div');
  caterContainer.classList.add('catering-container');

  let caterHero = new Image();
  caterHero.src = cateringBackground;

  let caterHeading = document.createElement('h1');
  caterHeading.textContent = "Let Leeroy's Cater Your Next Event!";

  let caterDescription1 = document.createElement('p');
  caterDescription1.textContent =
    'Ever raid-wiped because hungry party members AFKed—maybe to fix up some chicken—while you laid out meticulous attack plans?';
  let caterDescription2 = document.createElement('p');
  caterDescription2.textContent =
    "Well never again! Birthdays, raids, funerals—Leeroy's caters every event!";

  let caterTag1 = document.createElement('h2');
  let caterTag2 = document.createElement('h2');
  caterTag1.textContent = 'Stick to the plan, chums!';
  caterTag2.textContent = "Leeroy's has the food covered.";

  let orderNow = document.createElement('button');
  orderNow.textContent = 'Order Now';
  orderNow.classList.add('cater-order');

  caterContainer.appendChild(caterHero);
  caterContainer.appendChild(caterHeading);
  caterContainer.appendChild(caterDescription1);
  caterContainer.appendChild(caterDescription2);
  caterContainer.appendChild(caterTag1);
  caterContainer.appendChild(caterTag2);
  caterContainer.appendChild(orderNow);
  fragment.appendChild(caterContainer);

  content.appendChild(fragment);
}
