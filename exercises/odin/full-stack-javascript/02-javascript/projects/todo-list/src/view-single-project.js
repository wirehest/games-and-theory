// import * as events from './events.js';
import { projects } from './data-control.js';

let content = document.querySelector('#content');
let fragment = new DocumentFragment();
const priorities = {
  '--Set Priority--': '',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function drawSingleProject(projectIndex) {
  let project = projects[projectIndex];

  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Single Project';

  let cardTop = makeProjectCardTop(project, projectIndex);
  let cardTodos = makeProjectCardTodos(project, projectIndex);
  let cardBottom = makeProjectCardBottom(project);

  fragment.append(mainHeading, cardTop, cardTodos, cardBottom);
  content.append(fragment);
}

function makeProjectCardTop(project) {
  let cardTop = document.createElement('div');
  cardTop.classList.add('project', 'card-top');

  let projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.setAttribute('contenteditable', 'true');
  projectName.textContent = project.name;

  let deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '✖';
  // deleteButton.setAttribute('data-index', index);

  cardTop.append(projectName, deleteButton);
  return cardTop;
}

function makeProjectCardBottom() {
  let cardBottom = document.createElement('div');
  cardBottom.classList.add('project', 'card-bottom');
  let todoCounter = document.createElement('span');
  todoCounter.classList.add('todo-counter');

  return cardBottom;
}

function makeProjectCardTodos(project, projectIndex) {
  let cardTodos = new DocumentFragment();
  let i = 0;

  project.todos.forEach((todo, i) => {
    let cardTodo = document.createElement('div');
    cardTodo.setAttribute('data-project-index', projectIndex);
    cardTodo.setAttribute('data-todo-index', i++);
    cardTodo.classList.add('project', 'todo', `priority-${todo.priority}`);

    let todoDueInput = document.createElement('input');
    todoDueInput.setAttribute('type', 'date');
    todoDueInput.setAttribute('value', todo.dueDate);
    todoDueInput.classList.add('todo-hl-due');

    let todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('type', 'checkbox');
    todoTitleInput.id = 'todo-name';
    // TODO checkbox for title to update completion state of todo

    let todoTitleLabel = document.createElement('label');
    todoTitleLabel.setAttribute('contenteditable', 'true');
    todoTitleLabel.classList.add('todo-hl-title');
    todoTitleLabel.textContent = todo.title;

    let todoTitleContainer = document.createElement('div');
    todoTitleContainer.classList.add('todo-title-container');
    todoTitleContainer.append(todoTitleInput, todoTitleLabel);

    let todoExpandArrow = document.createElement('div');
    todoExpandArrow.classList.add('toggle-arrow2');

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
      // if (optionValue === '') priorityOption.setAttribute('selected', '');
      priorityOption.textContent = priority;
      todoPrioritySelect.append(priorityOption);
    }
    todoPriorityControls.append(todoPrioritySelect);

    cardTodo.append(
      todoDueInput,
      todoTitleContainer,
      todoExpandArrow,
      todoDescription,
      todoPriorityControls,
    );

    cardTodos.append(cardTodo);
  });

  return cardTodos;
}
