import { eventBus, projectAction, todoAction } from './events.js';

let content = document.querySelector('#content');
// let container = document.querySelector('.container');

export function attachListeners() {
  content.addEventListener('focusout', (e) => {
    let className = e.target.className;
    if (className === 'project-name') return;
    console.log(className);

    let container = e.target.closest('.container');
    let projectIndex = container?.attributes['data-project-index'].value;
    let todoIndex = e.target.offsetParent.attributes['data-todo-index'].value;
    // let projectIndex =
    //   e.target.offsetParent.attributes['data-project-index'].value;
    let newValue;

    if (className === '') {
      return;
    }

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
    let container = e.target.closest('.container');
    let className = e.target.className;
    let projectIndex = container?.attributes['data-project-index'].value;

    // console.log(container);
    // console.log(container.className === 'container project-only');
    if (className === 'delete-button') {
      eventBus.dispatchEvent(
        projectAction(projectIndex, 'project-delete', null),
      );
      return;
    }

    if (container.classList.contains('project-only')) {
      // TODO projectAction open todos
      eventBus.dispatchEvent(projectAction(projectIndex, 'project-open', null));
      return;
    }
  });
}
