import './style.css';
import Project from './class-project.js';

// TODO main loop
// TODO 'custom events' handler for decoupling, handles communication between project and task?

let projects = [];
let defaultProject = new Project('My First Project');
defaultProject.addTodo('ToDo #1', 'Description of ToDo #1.', 'low');
defaultProject.addTodo('ToDo #2', 'Description of ToDo #2.', 'medium');
defaultProject.addTodo('ToDo #3', 'Description of ToDo #3.', 'high');

// TODO check localStorage, if no local, add defaultProject
if (true) {
  projects.push(defaultProject);
} else {
  // TODO load localStorage
}
