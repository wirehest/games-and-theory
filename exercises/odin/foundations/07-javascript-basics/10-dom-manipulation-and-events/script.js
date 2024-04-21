// Lesson example:
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add the following using only JS and DOM methods:
// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following
//    elements inside of it:
//     3a. another <h1> that says “I’m in a div”
//     3b. a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement,
//     append the <h1> and <p> to it before adding it to the container.

let redParagraph = document.createElement('p');
redParagraph.textContent = "Hey I'm red!";
redParagraph.setAttribute('style', 'color: red');

let blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.setAttribute('style', 'color: blue');

let pinkDiv = document.createElement('div');
pinkDiv.setAttribute(
  'style',
  'background-color: pink; border: 2px solid black'
);

let pinkDivChildH1 = document.createElement('h1');
pinkDivChildH1.textContent = "I'm in a div";

let pinkDivChildP = document.createElement('p');
pinkDivChildP.textContent = 'ME TOO!';

pinkDiv.append(pinkDivChildH1, pinkDivChildP);
container.append(redParagraph, blueHeader, pinkDiv);
