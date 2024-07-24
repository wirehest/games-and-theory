import { eventBus, projectAction, todoAction } from './events.js';
import { projects, refreshProjects } from './data-control.js';
import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';
import { drawAddProjectModal, drawAddTodoModal } from './view-modals.js';
import Project from './class-project.js';

export function attachListeners() {
  let body = document.querySelector('body');
  let header = document.querySelector('header');
  let content = document.querySelector('#content');
  let container = document.querySelector('.container');
  let nav = document.querySelector('nav');
  let modal;

  // saves projects array data to localStorage on quit/refresh
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('data', JSON.stringify(projects));
  });

  body.addEventListener('focusout', (e) => {
    let validClassNames = [
      'todo-hl-due',
      'todo-priority',
      'todo-hl-title',
      'todo-desc',
      'project-name',
    ];

    let className = e.target.className;
    if (!validClassNames.includes(className)) return;
    // console.log(className);
    let container = e.target.closest('.container');
    let projectIndex = container?.attributes['data-project-index'].value;
    let newValue;

    if (className === 'project-name') {
      newValue = e.target.textContent;
      eventBus.dispatchEvent(
        projectAction(projectIndex, 'project-name', newValue),
      );
      return;
    }

    let todoIndex = e.target.offsetParent.attributes['data-todo-index'].value;

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

  body.addEventListener('click', (e) => {
    console.log(`class: ${e.target.className}`);
    let container = e.target.closest('.container');
    let className = e.target.className;
    let projectIndex = container?.attributes['data-project-index'].value;

    if (className === 'delete-project-button') {
      eventBus.dispatchEvent(
        projectAction(projectIndex, 'project-delete', null),
      );
      return;
    }

    if (className === 'add-project-modal-add-button') {
      projects.push(new Project(document.querySelector('#modal-name').value));
      let modal = document.querySelector('dialog');
      let form = document.querySelector('form');
      form.reset();
      modal.close();
      clearContent();
      drawProjects(projects);
      // TODO redraw projects or single-project based on state
      // or maybe remove option to add project when in single-project view?
      // Replace with add todo?
    }

    if (className === 'add-project-modal-cancel-button') {
      console.log('cancel button clicked');
      let modal = document.querySelector('dialog');
      let form = document.querySelector('form');
      form.reset();
      modal.close();
    }

    if (className === '') {
      return;
    }

    if (container?.classList.contains('project-only')) {
      // TODO projectAction open todos
      eventBus.dispatchEvent(projectAction(projectIndex, 'project-open', null));
    }

    switch (className) {
      case 'all-projects-button':
        console.log('triggered');
        clearContent();
        drawProjects(projects);
        break;
      case 'add-project-button':
        drawAddProjectModal();
        modal = document.querySelector('.add-project-modal');
        modal.showModal();
        break;
      case 'add-todo-button':
        drawAddTodoModal();
        modal = document.querySelector('.add-todo-modal');
        modal.showModal();
        break;
      case 'reset-button':
        localStorage.clear();
        refreshProjects();
        clearContent();
        drawProjects(projects);
        break;
    }
  });

  body.addEventListener('submit', (e) => {
    console.log('submit clicked');
  });

  eventBus.addEventListener('modal-action', (e) => {
    let action = e.detail.action;

    if (action === 'notice-no-todos') {
      // TODO display modal with instructions to add new todos by... (e.g., clicking some button)
    }
  });

  eventBus.addEventListener('project-action', (e) => {
    let projectIndex = e.detail.projectIndex;
    let action = e.detail.action;
    let value = e.detail.value;

    switch (action) {
      case 'project-name':
        projects[projectIndex].name = value;
        clearContent();
        drawSingleProject(projectIndex);
        // drawProjects(projects);
        break;
      case 'project-delete':
        projects.splice(projectIndex, 1);
        clearContent();
        // TODO handee 0 length project, if all projects deleted
        drawProjects(projects);
        break;
      case 'project-open':
        clearContent();
        drawSingleProject(projectIndex);
        break;
    }
  });

  eventBus.addEventListener('todo-action', (e) => {
    let projectIndex = e.detail.projectIndex;
    let todoIndex = e.detail.todoIndex;
    let action = e.detail.action;
    let newValue = e.detail.value;
    let todo = projects[projectIndex].todos[todoIndex];

    switch (action) {
      case 'todo-hl-due':
        // console.log(newValue);
        todo.dueDate = newValue;
        break;
      case 'todo-hl-title':
        // console.log(newValue);
        todo.title = newValue;
        break;
      case 'todo-desc':
        // console.log(newValue);
        todo.description = newValue;
        break;
      case 'todo-priority':
        // console.log(newValue);
        todo.priority = newValue;
      case 'todo-redraw':
        clearContent();
        drawSingleProject(projectIndex);
        break;
    }
  });

  function clearContent() {
    while (header.firstChild) header.removeChild(header.firstChild);
    while (content.firstChild) content.removeChild(content.firstChild);
  }
}
