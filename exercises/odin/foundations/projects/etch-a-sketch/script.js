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
      case 'color-black':
      case 'color-gradient':
      case 'color-random':
        [, coloring] = targetName.split('-');
        addDrawingEvent(coloring);
        // console.log('coloring: ' + coloring);
        break;
    }
  });

  addCells();
  addDrawingEvent(coloring);

  function addCells(width = 50) {
    // TODO refactor to remove nested loops
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
    container.addEventListener('mouseover', (event) => {
      if (event.target.className === 'cell') {
        if (coloring === 'black') cellColor = 'rgba(0, 0, 0, 1)';
        if (coloring === 'random') {
          let rgba = { r: 0, g: 0, b: 0 };
          for (let channel in rgba) {
            rgba[channel] = Math.floor(Math.random() * 256);
          }
          cellColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`;
        }
        event.target.setAttribute('style', `background-color: ${cellColor}`);
        // event.target.classList.toggle('shaded');
      }
    });
  }

  function setSize() {
    let gridWidth = -Infinity;
    while (!(gridWidth >= 1 && gridWidth <= 100)) {
      gridWidth = Math.round(+prompt('Enter grid width (between 1 and 100):'));
    }

    let cellRows = document.querySelectorAll('.cell-row');
    cellRows.forEach((cellRow) => cellRow.remove());
    addCells(gridWidth);
  }

  // function setColor(color = 'black') {
  //   switch (color) {
  //     case 'black':
  //       break;
  //     case 'gradient':
  //       break;
  //     case 'random':
  //       break;
  //   }
  // }
}

etchASketch();
