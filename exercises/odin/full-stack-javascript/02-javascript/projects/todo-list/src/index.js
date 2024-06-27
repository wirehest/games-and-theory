import './style.css';
import Project from './class-project.js';

import drawProjects from './view-projects.js';

// TODO main loop
// TODO 'custom events' handler for decoupling, handles communication between project and task?

let projects = [];

let defaultProject = new Project('My First Project');
defaultProject.addTodo('ToDo #1', 'Description of ToDo #1.', 'low');
defaultProject.addTodo('ToDo #2', 'Description of ToDo #2.', 'medium');
defaultProject.addTodo('ToDo #3', 'Description of ToDo #3.', 'high');

let defaultProject2 = new Project('My Second Project');
defaultProject2.addTodo('ToDo #1', 'Description of ToDo #1.', 'low');
defaultProject2.addTodo('ToDo #2', 'Description of ToDo #2.', 'medium');
defaultProject2.addTodo('ToDo #3', 'Description of ToDo #3.', 'high');

// TODO check localStorage, if no local, add defaultProject
if (true) {
  projects.push(defaultProject, defaultProject2);
} else {
  // TODO load localStorage
}

function main() {
  let field = document.querySelector('.todo-hl-due');
  field.addEventListener('blur', (e) => console.log(e));
}
main();

// drawProjects(projects);
