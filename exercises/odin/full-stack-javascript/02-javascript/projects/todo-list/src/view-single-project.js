import { projects } from './data-control.js';
import { setCurrentView } from './utility.js';

export const priorities = {
  '--Set Priority--': '',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function drawSingleProject(projectIndex) {
  setCurrentView('single-project');
  makeSingleProjectNav(); // build nav for this view

  // if there are no projects
  if (projects.length === 0) return;

  let project = projects[projectIndex];
  let content = document.querySelector('#content');
  let fragment = new DocumentFragment();

  let container = document.createElement('div');
  container.setAttribute('data-project-index', projectIndex);
  container.classList.add('container');

  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Single Project';

  let cardTop = makeProjectCardTop(project, projectIndex);
  let cardTodos = makeProjectCardTodos(project, projectIndex);
  let cardBottom = makeProjectCardBottom(project);

  container.append(cardTop, cardTodos, cardBottom);
  fragment.append(mainHeading, container);
  content.append(fragment);
}

function makeSingleProjectNav() {
  let header = document.querySelector('header');
  let navFragment = new DocumentFragment();

  let nav = document.createElement('nav');

  let allProjectsButton = document.createElement('button');
  allProjectsButton.classList.add('all-projects-button');
  allProjectsButton.setAttribute('type', 'button');
  allProjectsButton.textContent = 'Back';

  let addTodoButton = document.createElement('button');
  addTodoButton.classList.add('add-todo-button');
  addTodoButton.setAttribute('type', 'button');
  addTodoButton.textContent = 'Add Todo';

  nav.append(allProjectsButton, addTodoButton);
  navFragment.append(nav);
  header.append(navFragment);
}

function makeProjectCardTop(project, projectIndex) {
  let cardTop = document.createElement('div');
  cardTop.classList.add('project', 'card-top');

  let projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.setAttribute('contenteditable', 'true');
  projectName.textContent = project.name;

  let deleteProjectButton = document.createElement('div');
  deleteProjectButton.classList.add('delete-project-button');
  deleteProjectButton.textContent = '✖';

  let saveOrAdd = document.createElement('div');
  saveOrAdd.classList.add('save-or-add-message');
  let saveButton = document.createElement('button');
  saveButton.classList.add('save-project-button');
  saveButton.textContent = 'Save';

  // if there are no todos
  if (project.todos.length === 0) {
    saveOrAdd.textContent = 'Click "Add Todo" to start.';
  } else {
    saveOrAdd.append(saveButton);
  }

  cardTop.append(projectName, deleteProjectButton, saveOrAdd);
  return cardTop;
}

function makeProjectCardBottom() {
  let cardBottom = document.createElement('div');
  cardBottom.classList.add('project', 'card-bottom');
  let addTodoButton = document.createElement('button');
  let todoCounter = document.createElement('span');
  todoCounter.classList.add('todo-counter');

  return cardBottom;
}

function makeProjectCardTodos(project, projectIndex) {
  let cardTodos = new DocumentFragment();
  let i = 0;

  project.todos.forEach((todo, i) => {
    let cardTodo = document.createElement('div');
    cardTodo.setAttribute('data-todo-index', i);
    cardTodo.classList.add('project', 'todo', `priority-${todo.priority}`);

    let todoDueInput = document.createElement('input');
    todoDueInput.setAttribute('type', 'date');
    todoDueInput.setAttribute('value', todo.dueDate);
    todoDueInput.classList.add('todo-hl-due');

    let deleteTodoButton = document.createElement('div');
    deleteTodoButton.classList.add('delete-todo-button');
    deleteTodoButton.textContent = '✖';

    let todoTitleInput = document.createElement('input');
    let todoIsComplete = projects[projectIndex].getTodo(i).isComplete;
    todoTitleInput.setAttribute('type', 'checkbox');
    todoTitleInput.classList.add('todo-name');
    todoTitleInput.id = `todo-name-${i}`;

    let todoTitleLabel = document.createElement('label');
    todoTitleLabel.setAttribute('contenteditable', 'true');
    // todoTitleLabel.setAttribute('for', `todo-name-${i}`);
    todoTitleLabel.classList.add('todo-hl-title');
    todoTitleLabel.textContent = todo.title;

    if (todoIsComplete) {
      todoTitleInput.setAttribute('checked', 'true');
      todoTitleLabel.classList.add('strikethrough');
    }

    let todoTitleContainer = document.createElement('div');
    todoTitleContainer.classList.add('todo-title-container');
    todoTitleContainer.append(todoTitleInput, todoTitleLabel);

    // creates the collapsible section with desc. and priority
    let collapseWrap = document.createElement('div');
    collapseWrap.classList.add('collapsible-wrap');

    let collapseInput = document.createElement('input');
    let extrasVisible = projects[projectIndex].getTodo(i).extrasVisible;
    collapseInput.setAttribute('id', `collapse-${i}`);
    collapseInput.setAttribute('type', 'checkbox');
    if (extrasVisible) collapseInput.setAttribute('checked', 'true');
    collapseInput.classList.add('toggle');

    let collapseLabel = document.createElement('label');
    collapseLabel.setAttribute('for', `collapse-${i}`);
    collapseLabel.classList.add('toggle-label');
    collapseLabel.textContent = 'Expand';

    let collapseContent = document.createElement('div');
    collapseContent.classList.add('collapse-content');
    let collapseInner = document.createElement('div');
    collapseInner.classList.add('collapse-inner');

    let todoDescription = document.createElement('section');
    todoDescription.setAttribute('contenteditable', 'true');
    todoDescription.classList.add('todo-desc');
    todoDescription.textContent = todo.description;

    let todoPriorityControls = document.createElement('section');
    todoPriorityControls.classList.add('priority-control');
    let todoPrioritySelect = document.createElement('select');
    todoPrioritySelect.classList.add('todo-priority');

    for (let [priority, optionValue] of Object.entries(priorities)) {
      let priorityOption = document.createElement('option');

      priorityOption.setAttribute('value', optionValue);
      if (optionValue !== '') priorityOption.classList.add('priority-option');
      priorityOption.textContent = priority;
      todoPrioritySelect.append(priorityOption);

      if (todo.priority === optionValue) {
        priorityOption.setAttribute('selected', '');
      }
    }
    todoPriorityControls.append(todoPrioritySelect);

    collapseInner.append(todoDescription, todoPriorityControls);
    collapseContent.append(collapseInner);
    collapseWrap.append(collapseInput, collapseLabel, collapseContent);

    cardTodo.append(
      todoDueInput,
      deleteTodoButton,
      todoTitleContainer,
      collapseWrap,
    );

    cardTodos.append(cardTodo);
    i++; // remember to increment todo index counter
  });

  return cardTodos;
}
