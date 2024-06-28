export default function drawSingleProject(project) {
  const priorities = {
    '--Set Priority--': '',
    High: 'high',
    Medium: 'medium',
    Low: 'low',
  };
  let content = document.querySelector('#content');
  let fragment = new DocumentFragment();

  let mainHeading = document.createElement('h1');
  mainHeading.textContent = 'Single Project';

  // make cardTop
  let cardTop = document.createElement('div');
  cardTop.classList.add('project', 'card-top');
  let projectName = document.createElement('h1');
  projectName.setAttribute('contenteditable', 'true');
  projectName.textContent = project.name;
  let deleteButton = document.createElement('div');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '✖';
  cardTop.append(projectName, deleteButton);

  // make cardBottom
  let cardBottom = document.createElement('div');
  cardBottom.classList.add('project', 'card-bottom');
  let todoCounter = document.createElement('span');
  todoCounter.classList.add('todo-counter');

  // make ToDos
  let cardTodos = new DocumentFragment();
  project.todos.forEach((todo) => {
    let cardTodo = document.createElement('div');
    cardTodo.classList.add('project', 'todo', `priority-${todo.priority}`);

    let todoDueInput = document.createElement('input');
    todoDueInput.setAttribute('type', 'date');
    todoDueInput.setAttribute('value', todo.dueDate);
    todoDueInput.classList.add('todo-hl-due');

    let todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('type', 'checkbox');
    todoTitleInput.id = 'todo-name';

    let todoTitleLabel = document.createElement('label');
    todoTitleLabel.setAttribute('contenteditable', 'true');
    todoTitleLabel.classList.add('todo-hl-title');
    todoTitleLabel.textContent = todo.title;
    let todoTitleContainer = document.createElement('div');
    todoTitleContainer.classList.add('todo-title-container');
    todoTitleContainer.append(todoTitleInput, todoTitleLabel);

    let todoExpandArrow = document.createElement('div');
    todoExpandArrow.classList.add('toggle-arrow2');

    let todoDescription = document.createElement('section');
    todoDescription.setAttribute('contenteditable', 'true');
    todoDescription.classList.add('todo-desc');
    todoDescription.textContent = todo.description;

    let todoPriorityControls = document.createElement('section');
    todoPriorityControls.classList.add('priority-control');
    let todoPrioritySelect = document.createElement('select');
    for (let [priority, optionValue] of Object.entries(priorities)) {
      let priorityOption = document.createElement('option');
      priorityOption.setAttribute('value', optionValue);
      priorityOption.textContent = priority;
      todoPrioritySelect.append(priorityOption);
    }
    todoPriorityControls.append(todoPrioritySelect);

    cardTodo.append(
      todoDueInput,
      todoTitleContainer,
      todoExpandArrow,
      todoDescription,
      todoPrioritySelect,
    );
    cardTodos.append(cardTodo);
  });

  // populate DOM
  fragment.append(mainHeading, cardTop, cardTodos, cardBottom);
  content.append(fragment);
}

/*
        <section class="tasks">
          <input type="checkbox" id="0" />
          <label for="0">A sample task.</label>
          <input type="checkbox" id="1" />
          <label for="1">Another sample task.</label>
          <input type="checkbox" id="2" />
          <label for="2">Yet another sample task.</label>
        </section>

        <div class="tasks-control">
          <button type="button">+Task</button>
        </div>
      </div>
      <div class="project card-bottom">
        <span class="todo-counter">ToDos: 5 Open, 10 Total</span>
      </div>
      ///////////////////
      <h1>Single Project</h1>
      <div class="project card-top">
        <h1 contenteditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <div class="delete-button">✖</div>
      </div>

      <div class="project todo priority-high">
        <input type="date" class="todo-hl-due" value="2024-06-30" />
        <div class="todo-name-container">
          <input type="checkbox" id="todo-name" />
          <label class="todo-hl-title" contenteditable="true">
            High Priority Todo.
          </label>
        </div>

        <div class="toggle-arrow2"></div>

        <section class="todo-desc" contenteditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </section>

        <section class="priority-control">
          <select>
            <option value="" selected>--Set Priority--</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </section>


*/
