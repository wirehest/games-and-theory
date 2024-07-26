import './style.css';
import { projects } from './data-control.js';
// import drawSingleProject from './view-single-project.js';
import drawProjects from './view-projects.js';
import { attachListeners } from './listeners.js';

drawProjects(projects);
attachListeners();

// TODO
// 1. refresh todos immediately when priority is changed
//    (to update highlight color)
// 2. delete todo functionality
// 3. add todo functionality
// 4. when no todos, add message under project name
//    saying, 'click add todo'
// 5. expansion (drop down) functionality for todo description area
// 6. add-project immediately opens new project
