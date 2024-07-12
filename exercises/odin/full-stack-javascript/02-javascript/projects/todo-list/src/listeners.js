import { eventBus, projectAction, todoAction } from './events.js';

// let content = document.querySelectorAll('#content');

export function attachListeners() {
  content.addEventListener('focusout', (e) => {
    console.log(e);
    let className = e.target.className;
    if (className === 'project-name') {
      console.log('fire project action');
      return;
    }

    let todoIndex = e.target.offsetParent.attributes['data-todo-index'].value;
    let projectIndex =
      e.target.offsetParent.attributes['data-project-index'].value;
    let newValue;

    switch (className) {
      case 'todo-hl-due':
      case 'todo-priority':
        newValue = e.target.value;
        break;
      case 'todo-hl-title':
      case 'todo-desc':
        newValue = e.target.textContent;
        break;
    }

    eventBus.dispatchEvent(
      todoAction(projectIndex, todoIndex, className, newValue),
    );
  });

  content.addEventListener('click', (e) => {
    // console.log(e);
    if (e.target.className !== 'delete-button') return;
    // console.log('delete button clicked');
    let projectIndex =
      e.target.offsetParent.attributes['data-project-index'].value;
    eventBus.dispatchEvent(projectAction(projectIndex, 'project-delete', null));

    // call redraw function
    console.log('call redraw function here');
    return;
  });
}

// cardTodos.addEventListener('focusout', (event) => {
//   // console.log('target classname: ' + event.target.className);
//   // let todoIndex = event.explicitOriginalTarget.attributes['data-index'].value;
//   // console.log(event.explicitOriginalTarget.value);
// });

// deleteButton.addEventListener('click', () => {
//   events.eventBus.dispatchEvent(
//     events.deleteProjectEvent('single-project', index),
//   );
// });
