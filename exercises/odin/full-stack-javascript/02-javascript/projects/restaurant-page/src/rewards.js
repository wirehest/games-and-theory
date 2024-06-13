import rewardsBackground from './assets/images/rewards-background.jpg';

export default function drawRewards() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let rewardsContainer = document.createElement('div');
  let section = document.createElement('section');
  let spanLeeroys = document.createElement('span');
  let spanRewards = document.createElement('span');
  let firstHeading = document.createElement('h1');
  let secondHeading = document.createElement('h2');
  let button = document.createElement('button');
  let rewardsHero = document.createElement('div');

  rewardsContainer.classList.add('rewards-container');
  spanLeeroys.classList.add('rewards-leeroys');
  spanLeeroys.textContent = "Leeroy's";
  spanRewards.classList.add('rewards-name');
  spanRewards.textContent = 'Rewards';
  firstHeading.textContent = 'From us to you.';
  secondHeading.textContent = 'Earn points with every purchase.';

  button.classList.add('rewards-order');
  button.setAttribute('type', 'button');
  button.setAttribute('name', 'rewards-order');

  [spanLeeroys, spanRewards, firstHeading, secondHeading, button].forEach(
    (element) => {
      section.appendChild(element);
    },
  );

  [section, rewardsHero].forEach((element) => {
    rewardsContainer.appendChild(element);
  });

  fragment.appendChild();

  content.appendChild(fragment);
}
