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
  console.log(e);
});

eventBus.addEventListener('todo-action', (e) => {
  // console.log(e);
  let projectIndex = e.detail.projectIndex;
  let todoIndex = e.detail.todoIndex;
  let action = e.detail.action;
  let newValue = e.detail.value;
  let todo = projects[projectIndex].todos[todoIndex];
  // console.log(e);
  // console.log(e.detail);
  // console.log(e.detail);
  // console.log(todo);
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
