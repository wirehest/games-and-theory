import { projects, refreshProjects } from './data-control.js';
import { clearContent } from './utility.js';
import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';
import { drawAddProjectModal, drawAddTodoModal } from './view-modals.js';
import Project from './class-project.js';

export let eventBus = new EventTarget();

export function makeEvent({ pIndex, tIndex, action, newValue, inputs }) {
  return new CustomEvent('eventbus-event', {
    detail: { pIndex, tIndex, action, newValue, inputs },
  });
}

function redraw({ viewName = 'all', pIndex } = {}) {
  clearContent();
  if (viewName === 'all') drawProjects(projects);
  if (viewName === 'single') drawSingleProject(pIndex);
}

eventBus.addEventListener('eventbus-event', (e) => {
  let pIndex = e.detail.pIndex;
  let tIndex = e.detail.tIndex;
  let action = e.detail.action;
  let newValue = e.detail.newValue;
  let inputs = e.detail.inputs;
  let validTargets = [
    'todo-hl-due',
    'todo-priority',
    'todo-hl-title',
    'todo-desc',
    'project-name',
  ];
  let todo;
  let modal;
  let form;

  if (validTargets.includes(action)) {
    todo = projects[pIndex].todos[tIndex];
  }

  // todo change handling
  if (action === 'todo-hl-title') todo.title = newValue;
  if (action === 'todo-hl-due') todo.dueDate = newValue;
  if (action === 'todo-desc') todo.description = newValue;
  if (action === 'todo-priority') {
    todo.priority = newValue;
    redraw({ viewName: 'single', pIndex });
  }
  if (action === 'delete-todo-button') {
    projects[pIndex].removeTodo(tIndex);
    redraw({ viewName: 'single', pIndex });
  }
  if (action === 'save-button') {
    refreshProjects();
    // redraw({ viewName: 'single', pIndex });
  }

  // project change handling
  if (action === 'project-name') {
    projects[pIndex].name = newValue;
    redraw({ viewName: 'single', pIndex });
  }
  if (action === 'project-open') {
    redraw({ viewName: 'single', pIndex });
  }
  if (action === 'delete-project-button') {
    projects.splice(pIndex, 1);
    redraw();
  }

  // modal handling
  if (['add-project-button', 'add-todo-button'].includes(action)) {
    if (action === 'add-project-button') {
      drawAddProjectModal();
      modal = document.querySelector('.add-project-modal');
    }
    if (action === 'add-todo-button') {
      drawAddTodoModal();
      modal = document.querySelector('.add-todo-modal');
    }
    modal.showModal();
  }
  if (
    [
      'add-todo-modal-cancel-button',
      'add-project-modal-cancel-button',
    ].includes(action)
  ) {
    modal = document.querySelector('dialog');
    form = document.querySelector('form');
    form.reset();
    modal.close();
  }
  if (action === 'add-project-modal-add-button') {
    let project = new Project(document.querySelector('#modal-name').value);
    projects.push(project);
    modal = document.querySelector('dialog');
    form = document.querySelector('form');
    form.reset();
    modal.close();
    redraw();
  }
  if (action === 'add-todo-modal-add-button') {
    let todoTitle = document.querySelector('#modal-todo-title').value;
    let todoDescription = document.querySelector(
      '#modal-todo-description',
    ).value;
    let todoPriority = document.querySelector('#modal-todo-priority').value;

    projects[pIndex].addTodo(todoTitle, todoDescription, todoPriority);
    modal = document.querySelector('dialog');
    form = document.querySelector('form');
    form.reset();
    modal.close();
    redraw({ viewName: 'single', pIndex });
  }

  // nav button handling
  if (action === 'all-projects-button') redraw();
  if (action === 'reset-button') {
    localStorage.clear();
    refreshProjects();
    redraw();
  }
});
