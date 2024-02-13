/*
let heading = document.querySelector("#main-heading");
let para = document.querySelector('p');

heading.addEventListener("click", () => {
  console.log("You clicked the heading!");
});

// ex 8-1
para.addEventListener('click', () => {
  console.log("You clicked the paragraph!")
});

document.querySelector("em").addEventListener("click", () => {
  console.log("You clicked the em element!");
});

document.querySelector("body").addEventListener("click", () => {
  console.log("You clicked the body element!");
});
*/

let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", event => {
  let word = event.target.textContent;
  sentence.textContent += word;
  sentence.textContent += " ";
});

let box = document.querySelector("#box");

let currentX = 0
let currentY = 0

/*
document.querySelector("html").addEventListener("mousemove", e => {
  //console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`);
  box.style.left = e.clientX + 50 + "px";
  box.style.top = e.clientY + 50 + "px";
});
*/

document.querySelector("html").addEventListener("keydown", e => {
  console.log(e);
  /*
  if (e.repeat !== true) {
    if (e.key == "w") {
      currentY -= 5;
    } else if (e.key == "a") {
      currentX -= 5;
    } else if (e.key == "s") {
      currentY += 5;
    } else if (e.key == "d") {
      currentX += 5;
    }
  }
  */
  if (e.repeat) return;

  if (e.key == "w") {
    currentY -= 5;
    return;
  } else if (e.key == "a") {
    currentX -= 5;
    return;
  } else if (e.key == "s") {
    currentY += 5;
    return;
  } else if (e.key == "d") {
    currentX += 5;
    return;
  }



  box.style.left = currentX + "px";
  box.style.top = currentY + "px";
});
