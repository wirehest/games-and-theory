import './style.css';
// import addListeners from './events.js';
import drawProjects from './view-projects.js';
import drawSingleProject from './view-single-project.js';
import { projects } from './data-control.js';

console.log(projects);
drawSingleProject(0);
