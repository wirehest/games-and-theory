import { projects } from './data-control.js';
import { setCurrentView } from './utility.js';

export default function drawProjects(projects) {
  setCurrentView('all-projects');
  makeProjectsNav(); // build nav for this view

  let content = document.querySelector('#content');
  let fragment = new DocumentFragment();
  let projectIndex = 0;

  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'All Projects';
  fragment.append(mainHeading);

  projects.forEach((project) => {
    let container = document.createElement('div');
    container.setAttribute('data-project-index', projectIndex++);
    container.classList.add('container', 'project-only');

    let cardTop = document.createElement('div');
    cardTop.classList.add('project', 'card-top');

    let projectName = document.createElement('h1');
    projectName.classList.add('project-name');
    projectName.textContent = project.name;

    let deleteProjectButton = document.createElement('div');
    deleteProjectButton.classList.add('delete-project-button');
    deleteProjectButton.textContent = '✖';

    let cardBottom = document.createElement('div');
    cardBottom.classList.add('project', 'card-bottom');

    let todoCounter = document.createElement('span');
    todoCounter.classList.add('project-todo-counter');

    let todoCounts = 'ToDos: 5 Open, 10 Total'; // TODO build todo counter text
    todoCounter.textContent = todoCounts;

    cardTop.append(projectName, deleteProjectButton);
    cardBottom.append(todoCounter);
    container.append(cardTop, cardBottom);
    fragment.append(container);
  });

  content.append(fragment);
}

function makeProjectsNav() {
  let header = document.querySelector('header');
  let navFragment = new DocumentFragment();

  let nav = document.createElement('nav');

  let addProjectButton = document.createElement('button');
  addProjectButton.classList.add('add-project-button');
  addProjectButton.setAttribute('type', 'button');
  addProjectButton.textContent = 'Add Project';

  let resetButton = document.createElement('button');
  resetButton.classList.add('reset-button');
  resetButton.setAttribute('type', 'button');
  resetButton.textContent = 'Reset';

  nav.append(addProjectButton, resetButton);
  navFragment.append(nav);
  header.append(navFragment);
}
