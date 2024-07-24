import { projects } from './data-control.js';
// import { currentView } from './events.js';
// import { attachListeners } from './listeners.js';
export const priorities = {
  '--Set Priority--': '',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
};

export default function drawSingleProject(projectIndex) {
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

  // attachListeners();
}

function makeSingleProjectNav() {
  let header = document.querySelector('header');
  let navFragment = new DocumentFragment();

  let nav = document.createElement('nav');

  let allProjectsButton = document.createElement('button');
  allProjectsButton.classList.add('all-projects-button');
  allProjectsButton.setAttribute('type', 'button');
  allProjectsButton.textContent = 'All Projects';

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
  // cardTop.setAttribute('data-project-index', projectIndex);
  cardTop.classList.add('project', 'card-top');

  let projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.setAttribute('contenteditable', 'true');
  projectName.textContent = project.name;

  let deleteProjectButton = document.createElement('div');
  deleteProjectButton.classList.add('delete-project-button');
  deleteProjectButton.textContent = '✖';

  // if there are no todos
  if (project.todos.length === 0) {
  }
  // TODO display "click X to add todo"

  cardTop.append(projectName, deleteProjectButton);
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
    cardTodo.setAttribute('data-todo-index', i++);
    cardTodo.classList.add('project', 'todo', `priority-${todo.priority}`);

    let todoDueInput = document.createElement('input');
    todoDueInput.setAttribute('type', 'date');
    todoDueInput.setAttribute('value', todo.dueDate);
    todoDueInput.classList.add('todo-hl-due');

    let deleteTodoButton = document.createElement('div');
    deleteTodoButton.classList.add('delete-todo-button');
    deleteTodoButton.textContent = '✖';

    let todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('type', 'checkbox');
    todoTitleInput.id = 'todo-name';

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
      priorityOption.textContent = priority;
      todoPrioritySelect.append(priorityOption);

      if (todo.priority === optionValue) {
        priorityOption.setAttribute('selected', '');
      }
    }
    todoPriorityControls.append(todoPrioritySelect);

    cardTodo.append(
      todoDueInput,
      deleteTodoButton,
      todoTitleContainer,
      todoExpandArrow,
      todoDescription,
      todoPriorityControls,
    );

    cardTodos.append(cardTodo);
  });

  return cardTodos;
}
