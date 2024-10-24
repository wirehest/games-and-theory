import Project from './class-project.js';
import Todo from './class-todo.js';

export let projects;
refreshProjects();

export function refreshProjects() {
  if (storageAvailable('localStorage')) {
    projects = [];
    if (localStorage.length === 0) {
      ['First'].forEach((projectName) => {
        let project = new Project(`My ${projectName} Project`);
        project.addTodo('ToDo #1', 'Description of ToDo #1.', 'low');
        project.addTodo('ToDo #2', 'Description of ToDo #2.', 'medium');
        project.addTodo('ToDo #3', 'Description of ToDo #3.', 'high');
        projects.push(project);
      });
    } else {
      for (let parsedProjectString of JSON.parse(localStorage.data)) {
        let todos = [];
        let newProjectInstance = new Project();
        Object.assign(newProjectInstance, parsedProjectString);

        for (let parsedTodoString of newProjectInstance.todos) {
          let newTodoInstance = new Todo();
          Object.assign(newTodoInstance, parsedTodoString);
          todos.push(newTodoInstance);
        }
        newProjectInstance.todos = todos;
        projects.push(newProjectInstance);
      }
    }
  } else {
    console.log('localStorage not available');
  }
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === 'QuotaExceededError' &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
