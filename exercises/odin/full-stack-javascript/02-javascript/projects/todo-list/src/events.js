export let eventBus = new EventTarget();
// export eventBus;

// card top custom events
// export let deleteProjectEvent = new CustomEvent('project-delete', {
//   // bubbles: true,
//   origin: 'single-project',
//   position: this,
// });

export function deleteProjectEvent(index) {
  return new CustomEvent('project-delete', {
    detail: {
      origin: 'single-project',
      index,
      test: this,
    },
  });
}

// card todo custom events
export let modifyTodoDueDate = (function () {
  return new CustomEvent('modify-todo-duedate', {
    // bubbles: true,
    test: 'test',
    position: this,
  });
})();

export let modifyTodoTitle = new CustomEvent('modify-todo-title', {
  // bubbles: true,
});

export let modifyTodoDescription = new CustomEvent('modify-todo-description', {
  // bubbles: true,
});

export let modifyTodoPriority = new CustomEvent('modify-todo-priority', {
  // bubbles: true,
});
