import './style.css';
import './assets/images/chicken-background.jpg';
import './assets/images/icon-cart-arrow-down.svg';
import './assets/images/icon-truck-delivery.svg';

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
  header.addEventListener('click', (event) => {
    let target = event.target;
    // console.log(target.name);
    if (target.className === 'header-middle') drawPage(main, true);
  });
})();

function drawPage(innerMarkup, background = false) {
  let content = document.querySelector('#content');
  let childNodes = content.childNodes;
  console.log(childNodes);
  content.innerHTML = innerMarkup;

  if (background) {
    content.classList.add('background');
  }
}

// drawPage(main, true);
