import { projects } from './data-control.js';

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

eventBus.addEventListener('project-action', (e) => {
  let projectIndex = e.detail.projectIndex;
  let action = e.detail.action;
  let value = e.detail.value;
  // console.log(e);
  // console.log(projectIndex);
  // console.log(projects);
  // console.log(projectIndex, action, value);
  switch (action) {
    case 'project-delete':
      projects.splice(projectIndex, 1);
      console.log(projects);
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
  console.log(todo);
});

// eventBus.addEventListener('');
