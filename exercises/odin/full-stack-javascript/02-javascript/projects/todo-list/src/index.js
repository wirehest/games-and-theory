import './style.css';
import { projects } from './data-control.js';
import drawProjects from './view-projects.js';
import { attachListeners } from './listeners.js';

drawProjects(projects);
attachListeners();

// TODO
// 1. refresh todos immediately when priority is changed
//    (to update highlight color)
// 6. add-project immediately opens new project
// 7. issue with todo array being overwritten for all projects
//    with identical data. Find trigger
