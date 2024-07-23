let content = document.querySelector('#content');
let fragment = new DocumentFragment();

export function drawAddProjectModal() {
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
  content.append(dialog);
}

/*
<dialog class="add-project-modal">
  <form class="add-project-form" action="" method="dialog">
    <legend>Project Name:</legend>
    <div>
      <!-- <label for="name" placeholder="">Project Name</label> -->
      <input id="name" type="text" required autofocus />
    </div>
    <div class="form-buttons">
      <button class="add-button">Add Project</button>
      <button type="button" class="close-button">Cancel</button>
    </div>
  </form>
</dialog>
*/
