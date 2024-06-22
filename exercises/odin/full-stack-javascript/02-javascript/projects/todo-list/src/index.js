// import Task from './class-task.js';
import Project from './class-project.js';

// TODO main loop
// TODO 'custom events' handler for decoupling, handles communication between project and task?

let project = new Project();
console.log(project);

project.addTodo('New Todo #1', 'A new todo', 'high', []);
project.addTodo('New Todo #2', 'Yet another todo', 'low', [], '2026-01-08');
project.addTodo('New Todo #3', 'Testing no todo and date', 'medium');
console.log(project);

// sample Todo modification
project.todos[0].addTask(
  'Here is a sample task. A todo can be comprised of multiple tasks.',
);
console.log(project.todos[0].tasks);
