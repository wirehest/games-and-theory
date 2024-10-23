import pickupIcon from './assets/images/icon-cart-arrow-down.svg';
import deliverIcon from './assets/images/icon-truck-delivery.svg';
import mainBackground from './assets/images/chicken-background.jpg';

export default function drawMain() {
  content.style.background = `fixed center/cover url(${mainBackground})`;
  let fragment = new DocumentFragment();

  let homeContainer = document.createElement('div');
  let descSection = document.createElement('section');
  let descHeading = document.createElement('h1');
  let descParagraph = document.createElement('p');
  let buttonContainer = document.createElement('div');
  let buttonTypes = {
    'Order Pickup': pickupIcon,
    'Order Delivery': deliverIcon,
  };
  let specialSticker = document.createElement('div');
  let specialParagraph = document.createElement('p');
  let specialPrice = document.createElement('div');
  let priceSpans = { sym: '$', dollars: '5', cents: '.99' };

  homeContainer.classList.add('home-container');
  descHeading.textContent = "At Least You'll Have Chicken!";
  descParagraph.textContent = 'Unleash the flavors of Upper Blackrock Spire ';
  descParagraph.textContent += "with Leeroy's Legendary Chicken - just $5.99";
  descParagraph.textContent += ' for a basket or $10 for a box, for a limited';
  descParagraph.textContent += ' time only!';
  buttonContainer.classList.add('content-buttons');
  specialSticker.classList.add('special');
  specialPrice.classList.add('special-price');
  specialParagraph.textContent = 'Starting at';

  // create 'special' sticker
  for (let [partOfPrice, partValue] of Object.entries(priceSpans)) {
    let priceSpan = document.createElement('span');
    priceSpan.classList.add(`special-price-${partOfPrice}`);
    priceSpan.textContent = partValue;

    specialPrice.appendChild(priceSpan);
  }

  for (let element of [specialParagraph, specialPrice]) {
    specialSticker.appendChild(element);
  }

  // create description order buttons
  for (let [buttonText, buttonIcon] of Object.entries(buttonTypes)) {
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    let icon = new Image();

    button.setAttribute('type', 'button');
    button.classList.add('order-content');
    icon.classList.add('icon');
    icon.src = buttonIcon;
    icon.setAttribute('width', '35px');
    icon.setAttribute('height', '35px');
    button.appendChild(icon);
    button.appendChild(text);

    buttonContainer.appendChild(button);
  }

  // assemble description
  for (let element of [descHeading, descParagraph, buttonContainer]) {
    descSection.appendChild(element);
  }

  // add description and special to homeContainer
  for (let element of [descSection, specialSticker]) {
    homeContainer.appendChild(element);
  }

  fragment.appendChild(homeContainer);
  content.appendChild(fragment);
}
