function etchASketch() {
  let container = document.querySelector('.grid-container');
  let buttons = document.querySelector('.top-buttons');
  let coloring = 'black';

  buttons.addEventListener('click', (event) => {
    let targetName = event.target.name;
    switch (targetName) {
      case 'size':
        setSize();
        break;
      case 'clear':
        clearCells();
        break;
      case 'black':
      case 'gradient':
      case 'random':
        addDrawingEvent(targetName);
        break;
    }
  });

  // Prepare initial sketchpad.
  addCells();
  addDrawingEvent(coloring);

  function addCells(width = 16) {
    for (let i = 0; i < width; i++) {
      let cellRow = document.createElement('div');
      cellRow.className = 'cell-row';

      for (let j = 0; j < width; j++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cellRow.append(cell);
      }

      container.append(cellRow);
    }
  }

  function clearCells() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => (cell.style['background-color'] = ''));
  }

  function addDrawingEvent(coloring = 'black') {
    let cellColor;
    let gradientAlpha = 0;
    let gradientDelta = 0.1;
    let gradientIncreasing = true;

    container.addEventListener('mouseover', (event) => {
      if (event.target.className === 'cell') {
        switch (coloring) {
          case 'black':
            cellColor = makeRgbaString(0, 0, 0, 1);
            break;
          case 'gradient':
            if (gradientIncreasing) {
              if (gradientAlpha < 1) gradientAlpha += gradientDelta;
              else gradientIncreasing = false;
            } else {
              if (gradientAlpha > 0) gradientAlpha -= gradientDelta;
              else gradientIncreasing = true;
            }
            cellColor = makeRgbaString(0, 0, 0, gradientAlpha);
            break;
          case 'random':
            let rgb = { r: 0, g: 0, b: 0 };
            for (let channel in rgb) {
              rgb[channel] = Math.floor(Math.random() * 256);
            }
            cellColor = makeRgbaString(rgb.r, rgb.g, rgb.b, 1);
            break;
        }

        event.target.setAttribute('style', `background-color: ${cellColor}`);
      }
    });

    function makeRgbaString(red, green, blue, alpha) {
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
  }

  function setSize() {
    let gridWidth;

    while (true) {
      gridWidth = prompt('Enter grid width (between 1 and 100):');
      if (gridWidth === null || gridWidth === '') return;
      gridWidth = Math.round(gridWidth);
      if (!(gridWidth >= 1 && gridWidth <= 100)) continue;
      break;
    }

    let cellRows = document.querySelectorAll('.cell-row');
    cellRows.forEach((cellRow) => cellRow.remove());
    addCells(gridWidth);
  }
}

etchASketch();
