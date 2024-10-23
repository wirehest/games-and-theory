function checkPasswordsMatch() {
  let password = document.querySelector('#pass');
  let confirmPass = document.querySelector('#confirmpass');
  let createButton = document.querySelector('.button-create-account');

  createButton.addEventListener('click', () => {
    if (password.value === '' || confirmPass.value === '') return;
    if (password.value === confirmPass.value) return;

    let noMatchMessage = 'Passwords do not match.';
    let passwordFields = [password, confirmPass];

    passwordFields.forEach((field) => {
      field.setCustomValidity(noMatchMessage);
      field.reportValidity();
    });
    console.log(password, confirmPass);
  });
}

checkPasswordsMatch();
