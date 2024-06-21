// import Task from './class-task.js';
import Project from './class-project.js';

// let myTask = new Task();
// console.log(myTask);

let project = new Project();
console.log(project);

project.addTodo('New Task', 'A new task', 'high', 'test date');
console.log(project);

project.addTodo('New Task #2', 'Yet another task', 'low', 'test date 2');
console.log(project);
