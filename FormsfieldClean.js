
const btn = document.getElementById('submit');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');
  const lastNameInput = document.getElementById('last_name');
  const enviImailInput = document.getElementById('email');
  const celphoneInput = document.getElementById('phone');

  // Send value to server
  console.log(firstNameInput.value);
  console.log(lastNameInput.value);
  console.log(enviImailInput.value);
  console.log(celphoneInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
  lastNameInput.value ='';
  enviImailInput.value ='';
  celphoneInput.value ='' ;

});
