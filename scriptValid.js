const form = document.getElementById("registrationForm");
const btnsubmit = document.getElementById("btn-submit");

const errorUsername = document.getElementById("error-username");
const errorGender = document.getElementById("error-gender");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const errorPasswordConfirm = document.getElementById("error-passwordValidate");

function isEmpty(value) {
  return value.trim() === "";
}

function isValidEmail(value) {
  return value.includes("@") && value.includes(".");
}

function isUppercase(value) {
  for (let i = 0; i < value.length; i++) {
    const variable = value[i];
    if (variable >= "A" && variable <= "Z") {
      return true;
    }
  }
  return false;
}

function isSpecialChar(value) {
  const SpecialChar = "!@#$%^&*()_-+=~`{}[]|;:'<>,.?/";
  for (let i = 0; i < value.length; i++) {
    if (SpecialChar.includes(value[i])) {
      return true;
    }
  }
  return false;
}

function validate() {
  console.log("Validating");
  let valid = true;

  const username = form.username.value;

  if (isEmpty(username)) {
    errorUsername.textContent = "Username can't be empty";
    valid = false;
  } else if (username.length >= 10) {
    errorUsername.textContent = "Username must be less than 10 character";
    valid = false;
  } else if (username.length <= 3) {
    errorUsername.textContent = "Username must be longer than 3 character";
    valid = false;
  } else {
    errorUsername.textContent = "";
  }

  const gender = form.gender.value;

  if (isEmpty(gender)) {
    errorGender.textContent = "Please Select your gender";
    valid = false;
  } else {
    errorGender.textContent = "";
    valid = true;
  }

  const email = form.email.value;

  if (isEmpty(email)) {
    errorEmail.textContent = "Email can't be empty";
    valid = false;
  } else if (!isValidEmail(email)) {
    errorEmail.textContent = "Input the valid email (includes @, and .)";
    valid = false;
  } else {
    errorEmail.textContent = "";
    valid = true;
  }

  const password = form.password.value;
  if (isEmpty(password)) {
    errorPassword.textContent = "Password can't be empty";
    valid = false;
  } else if (!isUppercase(password)) {
    errorPassword.textContent = "Password must containt at least 1 uppercase";
    valid = false;
  } else if (!isSpecialChar(password)) {
    errorPassword.textContent =
      "Password must containt at least 1 special characters";
    valid = false;
  } else {
    errorPassword.textContent = "";
    valid = true;
  }

  const validPass = form.passwordConfirm.value;

  if (isEmpty(validPass)) {
    errorPasswordConfirm.innerHTML = "Password Confirmation can't be empty";
    valid = false;
  } else if (validPass != password) {
    errorPasswordConfirm.textContent ="password and confirmation password must be same";
    valid = false;
  } else {
    errorPasswordConfirm.innerHTML = "";
    valid = true;
  }

  btnsubmit.disabled != valid;
  return valid;
}

form.addEventListener("input", validate);

form.username.addEventListener("focus", validate);
form.gender.addEventListener("focus", validate);
form.email.addEventListener("focus", validate);
form.password.addEventListener("focus", validate);
form.passwordConfirm.addEventListener("focus", validate);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if(validate()){
    window.location.href = "home.html";
  }
});


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("gantiPage");

hamburger.addEventListener("click", () => {
  console.log("Hai");
  nav.classList.toggle("show");
});
