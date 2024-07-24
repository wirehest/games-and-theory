import { priorities } from './view-single-project.js';

let content = document.querySelector('#content');

export function drawAddProjectModal() {
  let fragment = new DocumentFragment();
  let dialog = document.createElement('dialog');
  dialog.classList.add('add-project-modal');

  let form = document.createElement('form');
  form.classList.add('add-project-form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'dialog');

  let legend = document.createElement('legend');
  legend.textContent = 'Project Name:';

  let divInput = document.createElement('div');
  let input = document.createElement('input');
  input.setAttribute('id', 'modal-name');
  input.setAttribute('type', 'text');
  input.setAttribute('required', '');
  input.setAttribute('autofocus', '');
  divInput.append(input);

  let divButtons = document.createElement('div');
  let addButton = document.createElement('button');
  addButton.classList.add('add-project-modal-add-button');
  addButton.textContent = 'Add Project';
  let cancelButton = document.createElement('button');
  cancelButton.classList.add('add-project-modal-cancel-button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Cancel';
  divButtons.append(addButton, cancelButton);

  form.append(legend, divInput, divButtons);
  dialog.append(form);
  fragment.append(dialog);
  content.append(fragment);
}

export function drawAddTodoModal() {
  let fragment = new DocumentFragment();
  let dialog = document.createElement('dialog');
  dialog.classList.add('add-todo-modal');

  let form = document.createElement('form');
  form.classList.add('add-todo-form');
  form.setAttribute('action', '');
  form.setAttribute('method', 'dialog');

  let legend = document.createElement('legend');
  legend.textContent = 'Add New Todo:';

  let divTitle = document.createElement('div');
  let labelTitle = document.createElement('label');
  labelTitle.setAttribute('for', 'modal-todo-title');
  labelTitle.textContent = 'Name:';
  let inputTitle = document.createElement('input');
  inputTitle.setAttribute('id', 'modal-todo-title');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('required', '');
  inputTitle.setAttribute('autofocus', '');
  divTitle.append(labelTitle, inputTitle);

  let divDescription = document.createElement('div');
  let labelDescription = document.createElement('label');
  labelDescription.setAttribute('for', 'modal-todo-description');
  labelDescription.textContent = 'Description:';
  let inputDescription = document.createElement('input');
  inputDescription.setAttribute('id', 'modal-todo-description');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('required', '');
  // inputDescription.setAttribute('autofocus', '');
  divDescription.append(labelDescription, inputDescription);

  let divPriority = document.createElement('div');
  // divPriority.classList.add('');
  let prioritySelect = document.createElement('select');
  // todoPrioritySelect.classList.add('todo-priority');

  for (let [priority, optionValue] of Object.entries(priorities)) {
    let priorityOption = document.createElement('option');

    priorityOption.setAttribute('value', optionValue);
    priorityOption.textContent = priority;
    prioritySelect.append(priorityOption);

    // if (todo.priority === optionValue) {
    //   priorityOption.setAttribute('selected', '');
    // }
  }
  divPriority.append(prioritySelect);
  // addTodo(title, description, priority, dueDate, tasks) {

  let divButtons = document.createElement('div');
  let addButton = document.createElement('button');
  addButton.classList.add('add-todo-modal-add-button');
  addButton.textContent = 'Add Todo';
  let cancelButton = document.createElement('button');
  cancelButton.classList.add('add-todo-modal-cancel-button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Cancel';
  divButtons.append(addButton, cancelButton);

  form.append(legend, divTitle, divDescription, divPriority, divButtons);
  dialog.append(form);
  fragment.append(dialog);
  content.append(fragment);
}
