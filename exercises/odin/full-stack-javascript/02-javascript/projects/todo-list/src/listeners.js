import { eventBus, projectAction, todoAction } from './events.js';

let content = document.querySelector('#content');

export function attachSingleProjectListeners() {
  content.addEventListener('focusout', (e) => {
    let className = e.target.className;

    if (className === 'project-name') {
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
    if (e.target.className !== 'delete-button') return;

    let projectIndex =
      e.target.offsetParent.attributes['data-project-index'].value;

    eventBus.dispatchEvent(projectAction(projectIndex, 'project-delete', null));

    // call redraw function
    // console.log('call redraw function here');
    // return;
  });
}

// export function attachProjectsListeners() {
//   content.addEventListener('click', (e) => {
//     return;
//   });
// }
