cardTodo.addEventListener('focusout', (event) => {
  // console.log('target classname: ' + event.target.className);
  let todoIndex = event.explicitOriginalTarget.attributes['data-index'].value;
  // console.log(event.explicitOriginalTarget.value);
  switch (event.target.className) {
    case 'todo-hl-due':
      // console.log(event);
      // console.log(index);
      events.eventBus.dispatchEvent(
        events.modifyTodoDueDate(projectIndex, todoIndex, newDate),
      );
      break;
    case 'todo-hl-title':
      // console.log('todo title modified');
      events.eventBus.dispatchEvent(events.modifyTodoTitle());
      break;
    case 'todo-desc':
      // console.log('todo description modified');
      events.eventBus.dispatchEvent(events.modifyTodoDescription);
      break;
    case 'todo-priority':
      // console.log('todo priority modified');
      events.eventBus.dispatchEvent(events.modifyTodoPriority);
      break;
  }
});

deleteButton.addEventListener('click', () => {
  events.eventBus.dispatchEvent(
    events.deleteProjectEvent('single-project', index),
  );
});
