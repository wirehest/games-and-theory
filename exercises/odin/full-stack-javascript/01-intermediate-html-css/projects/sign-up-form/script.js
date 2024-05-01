function checkPasswordsMatch() {
  let password = document.querySelector('#pass').value;
  let confirmPass = document.querySelector('#confirmpass').value;
  let createButton = document.querySelector('.button-create-account');

  createButton.addEventListener('click', () => {
    // console.log(password, confirmPass);
    if (password.value === confirmPass.value) return;
    // password.setCustomValidity
  });
}

checkPasswordsMatch();
