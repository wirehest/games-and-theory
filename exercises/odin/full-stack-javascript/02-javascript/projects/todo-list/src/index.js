import './style.css';
import { projects } from './data-control.js';
import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';

drawProjects(projects);
console.log(projects);
// drawSingleProject(0);
// attachListeners();
