export default function drawProjects(projects) {
  let content = document.querySelector('#content');
  let fragment = new DocumentFragment();

  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Projects';
  fragment.append(mainHeading);

  projects.forEach((project) => {
    let container = document.createElement('div');
    container.classList.add('container');

    let cardTop = document.createElement('div');
    cardTop.classList.add('project', 'card-top');

    let projectName = document.createElement('h1');
    projectName.textContent = project.name;

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = '✖';
    // TODO add listener for delete button

    let cardBottom = document.createElement('div');
    cardBottom.classList.add('project', 'card-bottom');

    let todoCounter = document.createElement('span');
    todoCounter.classList.add('project-todo-counter');

    let todoCounts = 'ToDos: 5 Open, 10 Total'; // TODO build todo counter text
    todoCounter.textContent = todoCounts;

    // eventListeners
    container.addEventListener('click', (event) => {
      let className = event.target.attributes.class?.value;
      console.log(className);

      if (className === undefined) return;
      // console.log(target.attributes.class.value === 'project-delete-button');
      if (className === 'delete-button') {
        // TODO try to set up emitter?
        console.log('delete button clicked')
        return;
      }

      if (className === 'card-top') {
        // TODO try to set up emitter?
        return;
      }
    });

    cardTop.append(projectName, deleteButton);
    cardBottom.append(todoCounter);
    container.append(cardTop, cardBottom);
    fragment.append(container);
  });

  content.append(fragment);
}
/*
<h1>Projects</h1>
<div class="project card-top">
  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
  <div class="delete-button">✖</div>
</div>
<div class="project card-bottom">
  <span class="todo-counter">ToDos: 5 Open, 10 Total</span>
</div>
*/
