import * as events from './events.js';

events.eventBus.addEventListener('project-delete', (event) => {
  console.log(event);
  // console.log(event.index);
});

events.eventBus.addEventListener('modify-todo-duedate', () => {
  console.log('successful fire');
});

// events.eventBus.addEventListener('', () => {
//
// });
