import { projects } from './data-control.js';
import { attachListeners } from './listeners.js';

let content = document.querySelector('#content');
let fragment = new DocumentFragment();

export default function drawProjects(projects) {
  let projectIndex = 0;
  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Projects';
  fragment.append(mainHeading);

  projects.forEach((project) => {
    // Objects.values(projects).forEach((project) => {
    let container = document.createElement('div');
    container.classList.add('container');

    let cardTop = document.createElement('div');
    cardTop.setAttribute('data-project-index', projectIndex++);
    cardTop.classList.add('project', 'card-top');

    let projectName = document.createElement('h1');
    projectName.classList.add('project-name');
    projectName.textContent = project.name;

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '✖';

    let cardBottom = document.createElement('div');
    cardBottom.classList.add('project', 'card-bottom');

    let todoCounter = document.createElement('span');
    todoCounter.classList.add('project-todo-counter');

    let todoCounts = 'ToDos: 5 Open, 10 Total'; // TODO build todo counter text
    todoCounter.textContent = todoCounts;

    cardTop.append(projectName, deleteButton);
    cardBottom.append(todoCounter);
    container.append(cardTop, cardBottom);
    fragment.append(container);
  });

  content.append(fragment);
  attachListeners();
}
