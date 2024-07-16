import { projects, refreshProjects } from './data-control.js';
import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';

let content = document.querySelector('#content');
let nav = document.querySelector('nav');

export let eventBus = new EventTarget();

export function projectAction(projectIndex, action, value) {
  return new CustomEvent('project-action', {
    detail: {
      projectIndex,
      action,
      value,
    },
  });
}

export function todoAction(projectIndex, todoIndex, action, value) {
  return new CustomEvent('todo-action', {
    detail: {
      projectIndex,
      todoIndex,
      action,
      value,
    },
  });
}

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

nav.addEventListener('click', (e) => {
  let className = e.target.className;
  // console.log(className);
  switch (className) {
    case 'show-all':
      break;
    case 'add-project':
      break;
    case 'reset':
      localStorage.clear();
      refreshProjects();
      clearContent();
      drawProjects(projects);
      break;
  }

  // console.log(localStorage.getItem('data') + 'after setItem');
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('data', JSON.stringify(projects));
});

eventBus.addEventListener('project-action', (e) => {
  let projectIndex = e.detail.projectIndex;
  let action = e.detail.action;
  let value = e.detail.value;

  switch (action) {
    case 'project-delete':
      projects.splice(projectIndex, 1);
      clearContent();
      // TODO handle 0 length project, if all projects deleted
      drawProjects(projects);
      break;
  }
});

eventBus.addEventListener('todo-action', (e) => {
  let projectIndex = e.detail.projectIndex;
  let todoIndex = e.detail.todoIndex;
  let action = e.detail.action;
  let newValue = e.detail.value;
  let todo = projects[projectIndex].todos[todoIndex];

  switch (action) {
    case 'todo-hl-due':
      todo.dueDate = newValue;
      break;
    case 'todo-hl-title':
      todo.title = newValue;
      break;
    case 'todo-desc':
      todo.description = newValue;
      break;
    case 'todo-priority':
      todo.priority = newValue;
      break;
  }
});
