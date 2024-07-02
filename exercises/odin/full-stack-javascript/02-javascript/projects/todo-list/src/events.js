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

eventBus.addEventListener('project-action', (event) => {
  console.log(event);
});

eventBus.addEventListener('todo-action', (event) => {
  console.log(event);
});
