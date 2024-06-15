export default function drawSignin() {
  content.style.background = 'var(--color-window)';
  let fragment = new DocumentFragment();

  let signinContainer = document.createElement('div');
  signinContainer.classList.add('signin-container');

  let signinHeader = document.createElement('h1');
  signinHeader.textContent = 'Sign-in to your account';

  let formElements = document.createElement('form');
  let formDiv1 = document.createElement('div');
  let formDiv2 = document.createElement('div');
  let formDiv3 = document.createElement('div');
  formDiv3.classList.add('remember-checkbox');

  let newAccountDiv = document.createElement('div');
  newAccountDiv.classList.add('new-account');
  newAccountDiv.textContent = 'Or, ';

  let newAccountSpan = document.createElement('span');
  newAccountSpan.classList.add('new-account-link');
  newAccountSpan.textContent = 'create a new account.';

  let usernameLabel = document.createElement('label');
  let usernameInput = document.createElement('input');
  usernameLabel.setAttribute('for', 'username');
  usernameInput.setAttribute('type', 'text');
  usernameInput.setAttribute('id', 'username');
  usernameInput.setAttribute('name', 'username');
  usernameLabel.textContent = 'Username';

  let passwordLabel = document.createElement('label');
  let passwordInput = document.createElement('input');
  passwordLabel.setAttribute('for', 'password');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordLabel.textContent = 'Password';

  let rememberLabel = document.createElement('label');
  let rememberInput = document.createElement('input');
  rememberLabel.setAttribute('for', 'remember');
  rememberInput.setAttribute('type', 'checkbox');
  rememberInput.setAttribute('id', 'remember');
  rememberInput.setAttribute('name', 'remember');
  rememberInput.setAttribute('value', 'remember');
  rememberLabel.textContent = 'Remember me';

  let submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'button');
  submitButton.textContent = 'Submit';

  [usernameLabel, usernameInput].forEach((element) => {
    formDiv1.appendChild(element);
  });

  [passwordLabel, passwordInput].forEach((element) => {
    formDiv2.appendChild(element);
  });

  [rememberLabel, rememberInput].forEach((element) => {
    formDiv3.appendChild(element);
  });

  [formDiv1, formDiv2, formDiv3, submitButton].forEach((element) => {
    formElements.appendChild(element);
  });

  newAccountDiv.appendChild(newAccountSpan);

  signinContainer.appendChild(signinHeader);
  signinContainer.appendChild(formElements);
  signinContainer.appendChild(newAccountDiv);
  fragment.appendChild(signinContainer);

  content.appendChild(fragment);
}
