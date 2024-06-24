export default function drawProjects(projects) {
  let content = document.querySelector('#content');
  let fragment = new DocumentFragment();

  let projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects');

  let projectsHeading = document.createElement('h1');
  projectsHeading.textContent = 'Projects';

  projectsContainer.appendChild(projectsHeading);

  projects.forEach((project) => {
    let projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    let projectName = document.createElement('h1');
    projectName.textContent = project.name;

    let projectDelete = document.createElement('div');
    projectDelete.classList.add('project-delete-button');
    projectDelete.textContent = '✖';
    // TODO add listener for delete button

    let projectTodoCounter = document.createElement('span');
    // TODO build todo counter text
    let todoCounts = 'ToDos: 5 Open, 10 Total';
    projectTodoCounter.classList.add('project-todo-counter');
    projectTodoCounter.textContent = todoCounts;

    [projectName, projectDelete, projectTodoCounter].forEach((element) => {
      projectCard.appendChild(element);

      projectsContainer.appendChild(projectCard);
    });

    projectsContainer.addEventListener('click', (event) => {
      let className = event.target.attributes.class?.value;

      if (className === undefined) return;
      // console.log(target.attributes.class.value === 'project-delete-button');
      if (className === 'project-delete-button') {
        // TODO try to set up emitter?
        return;
      }

      if (className === 'project-card') {
        // TODO try to set up emitter?
        return;
      }
    });

    fragment.appendChild(projectsContainer);
    content.appendChild(fragment);
  });
}

/*
<div class="projects">
  <h1>Projects</h1>
  <div class="project-card">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
    <div class="project-delete-button">✖</div>
    <span class="project-todo-counter">ToDos: 5 Open, 10 Total</span>
  </div>
</div>; 
*/
