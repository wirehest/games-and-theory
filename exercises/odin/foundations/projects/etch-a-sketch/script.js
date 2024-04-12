function etchASketch() {
  addCells();
  applyHover();

  function addCells(width = 16) {
    // TODO Add variable and way to control CSS for cell size
    let container = document.querySelector('.grid-container');

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

  function applyHover() {
    let container = document.querySelector('.grid-container');
    container.addEventListener('mouseover', (event) => {
      console.log(event.target.className);
      if (event.target.className === 'cell') {
        event.target.classList.toggle('shaded');
      }
    });
    // let allCells = document.querySelectorAll('.cells');
    // allCells.forEach((cell) => {
    //   cell.addEventListener('mouseenter', console.log(cell.id));
    // });
  }
}

etchASketch();

// Adding a new class to the div.
// Changing the div’s background color using JavaScript.

// Add a button on the top of the screen that will send the user a popup
// asking for the number of squares per side for the new grid. Once entered, the
// existing grid should be removed, and a new grid should be generated in the
// same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

// Tip: Set the limit for the user input to a maximum of 100. A larger number
// of squares results in more computer resources being used, potentially causing
// delays, freezing, or crashing that we want to prevent.

// Research button tags in HTML and how you can make a JavaScript function run
// when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up
// without changing the total amount of pixels used.
// Push your project to GitHub!
