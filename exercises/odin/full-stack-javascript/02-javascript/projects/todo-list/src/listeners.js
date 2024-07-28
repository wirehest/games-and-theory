import { clearContent, currentView } from './utility.js';
import { eventBus, makeEvent } from './events.js';
import { projects } from './data-control.js';

export function attachListeners() {
  let body = document.querySelector('body');

  // saves projects array data to localStorage on quit/refresh
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('data', JSON.stringify(projects));
  });

  body.addEventListener('focusout', (e) => {
    let validTargets = [
      'todo-hl-due',
      'todo-priority',
      'todo-hl-title',
      'todo-desc',
      'project-name',
    ];
    let className = e.target.className;
    if (!validTargets.includes(className)) return;

    let container = e.target.closest('.container');
    let pIndex = container?.attributes['data-project-index'].value;
    let todo = e.target.closest('[data-todo-index]');
    let tIndex = todo.attributes['data-todo-index'].value ?? undefined;
    let newValue;

    if (['todo-hl-due', 'todo-priority'].includes(className)) {
      newValue = e.target.value;
    }

    if (['todo-hl-title', 'todo-desc', 'project-name'].includes(className)) {
      newValue = e.target.textContent;
    }

    eventBus.dispatchEvent(
      makeEvent({ pIndex, tIndex, action: className, newValue }),
    );
  });

  // click handlers for nav buttons
  body.addEventListener('click', (e) => {
    let className = e.target.className;

    if (
      [
        'all-projects-button',
        'add-project-button',
        'add-todo-button',
        'reset-button',
      ].includes(className)
    ) {
      eventBus.dispatchEvent(makeEvent({ action: className }));
    }

    if (className === 'save-button') {
      // TODO
    }
  });

  // click handlers for modal buttons
  body.addEventListener('click', (e) => {
    // if (currentView !== 'single-project') return;

    let className = e.target.className;
    let container = document.querySelector('.container');
    let pIndex = container?.attributes['data-project-index'].value;

    if (className === 'add-todo-modal-add-button') {
      eventBus.dispatchEvent(makeEvent({ pIndex, action: className }));
    }

    if (className === 'add-project-modal-add-button') {
      eventBus.dispatchEvent(makeEvent({ action: className }));
      // TODO redraw projects or single-project based on state
      // or maybe remove option to add project when in single-project view?
      // Replace with add todo?
    }

    if (
      [
        'add-todo-modal-cancel-button',
        'add-project-modal-cancel-button',
      ].includes(className)
    ) {
      eventBus.dispatchEvent(makeEvent({ action: className }));
    }
  });

  // click handlers for cards
  body.addEventListener('click', (e) => {
    let className = e.target.className;
    let container = e.target.closest('.container') ?? undefined;
    let pIndex = container?.attributes['data-project-index'].value;
    let todo = e.target.closest('.todo');
    let tIndex = todo?.attributes['data-todo-index'].value;

    if (className === 'delete-todo-button') {
      eventBus.dispatchEvent(makeEvent({ pIndex, tIndex, action: className }));
    }

    if (className === '') {
      // TODO update card immediately when new priority clicked
    }
  });

  body.addEventListener('click', (e) => {
    let className = e.target.className;
    let container = e.target.closest('.container') ?? undefined;
    let pIndex = container?.attributes['data-project-index'].value;
    let modal, form;

    if (currentView === 'all-projects') {
      if (!container) return;
      if (className === 'delete-project-button') {
        eventBus.dispatchEvent(makeEvent({ pIndex, action: className }));
        return;
      }
      eventBus.dispatchEvent(makeEvent({ pIndex, action: 'project-open' }));
    }
  });
}
