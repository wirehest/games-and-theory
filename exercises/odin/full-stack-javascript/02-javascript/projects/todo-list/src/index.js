import './style.css';
import { projects } from './data-control.js';
import drawProjects from './view-projects.js';
import { attachListeners } from './listeners.js';

drawProjects(projects);
attachListeners();

// TODO
