import { projects, refreshProjects } from './data-control.js';
import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';
import { drawAddProjectModal } from './view-modals.js';
import Project from './class-project.js';

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

export function modalAction(action, inputs) {
  return new CustomEvent('modal-action', {
    detail: {
      action,
      inputs,
    },
  });
}

// function clearContent() {
//   while (content.firstChild) {
//     content.removeChild(content.firstChild);
//   }
// }
