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
  rollMin = 1;
  rollPosition = 1;

  constructor(images, insertTarget, frameWidth) {
    if (images.length === 0) {
      this.images = [];
    } else {
      let sources = [...images];
      sources.unshift(images.at(-1));
      sources.push(images[0]);
      this.images = sources;
    }
    this.insertTarget = insertTarget;
    this.init();
  }

  // init remaining variables
  init() {
    this.imageCarousel = document.querySelector(this.insertTarget);
    this.carouselRoll = document.querySelector(
      `${this.insertTarget} .carousel-roll`,
    );
    this.rollLength = document.querySelectorAll(
      `${this.insertTarget} .carousel-img`,
    ).length;
    this.rollMax = this.rollLength - 2;
    this.makeCarouselFrame();
    // console.log(this.images);
    // console.log(this.carouselRoll);
    // console.log(this.rollMax);
  }

  redrawCircles() {
    //
  }

  makeCarouselFrame() {
    let fragment = new DocumentFragment();

    let divFrame = document.createElement('div');
    divFrame.classList.add('carousel-frame');

    let divArrowLeft = document.createElement('div');
    divArrowLeft.classList.add('carousel-nav-left');

    let divArrowRight = document.createElement('div');
    divArrowRight.classList.add('carousel-nav-right');

    let divCenter = document.createElement('div');
    divCenter.classList.add('carousel-center');

    let divRoll = document.createElement('div');
    divRoll.classList.add('carousel-roll');

    let divCircles = document.createElement('div');
    divCircles.classList.add('carousel-nav-circles');

    let ulCircles = document.createElement('ul');

    for (let [i, image] of Object.entries(this.images)) {
      let divImg = document.createElement('div');
      divImg.classList.add('carousel-img');
      divImg.textContent = image;

      if (+i !== 0 && +i !== this.images.length - 1) {
        let liCircle = document.createElement('li');
        liCircle.classList.add('dot');
        liCircle.setAttribute('data-imgnum', i);
        if (+i === this.rollPosition) liCircle.classList.add('dot-filled');
        ulCircles.append(liCircle);
      }

      divRoll.append(divImg);
    }

    divFrame.append(divArrowLeft, divCenter, divArrowRight);
    divCenter.append(divRoll);
    divCircles.append(ulCircles);
    fragment.append(divFrame, divCircles);

    this.imageCarousel.append(fragment);
  }
}

/*
imageCarousel.addEventListener('click', (e) => {
  let className = e.target.className;

  // console.log(className);
  if (className === 'carousel-nav-right' || className === 'carousel-nav-left') {
    let sign = className === 'carousel-nav-left' ? -1 : 1;
    rollPosition = wrapPosition(rollPosition, sign, rollMin, rollMax);
    let offset = -(rollPosition - 1) * 320;
    carouselRoll.style.transform = `translate(${offset}px)`;
  }
});

function wrapPosition(current, sign, minimum, maximum) {
  current += sign;
  if (current < minimum) current = maximum;
  if (current > maximum) current = minimum;
  return current;
}


<div class="carousel-frame">
  <div class="carousel-nav-left"></div>
  <div class="carousel-center">
    <div class="carousel-roll">
      <div class="carousel-img">5</div>
      <div class="carousel-img">1</div>
      <div class="carousel-img">2</div>
      <div class="carousel-img">3</div>
      <div class="carousel-img">4</div>
      <div class="carousel-img">5</div>
      <div class="carousel-img">1</div>
    </div>
  </div>
  <div class="carousel-nav-right"></div>
</div>
<div class="carousel-nav-circles">
  <ul>
    <li class="dot"></li>
    <li class="dot"></li>
    <li class="dot"></li>
    <li class="dot"></li>
    <li class="dot"></li>
  </ul>
</div>
*/
