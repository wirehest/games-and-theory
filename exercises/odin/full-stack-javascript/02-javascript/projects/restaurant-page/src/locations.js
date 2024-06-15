import stormwind from './assets/images/jaime-jasso-stormwind-01s.jpg';

export default function drawLocations() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let locationsContainer = document.createElement('div');
  locationsContainer.classList.add('locations-container');

  let stormwindImage = new Image();
  stormwindImage.src = stormwind;
  stormwindImage.setAttribute(
    'title',
    'Stormwind rendering by Jaime Jasso on Artstation.',
  );

  let stormwindHeading = document.createElement('h1');
  stormwindHeading.textContent = 'Stormwind, Eastern Kingdoms';

  let stormwindDesc1 = document.createElement('p');
  stormwindDesc1.textContent =
    "Our flagship restaurant, located in Stormwind's historic Trade District.";

  let stormwindAddress = document.createElement('address');
  stormwindAddress.innerHTML =
    "Leeroy's Chicken,<br>12 Market Street<br>Trade District<br>Stormwind City<br> Kingdom of Stormwind<br> Eastern Kingdoms";

  locationsContainer.appendChild(stormwindImage);
  locationsContainer.appendChild(stormwindHeading);
  locationsContainer.appendChild(stormwindDesc1);
  locationsContainer.appendChild(stormwindAddress);
  fragment.appendChild(locationsContainer);

  content.appendChild(fragment);
}
