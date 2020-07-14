const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeated-password");

// Display error message on specified input element
const showError = (input, message) => {
  const formControl = input.parentElement;
  const smallTagMessage = formControl.querySelector("small");
  formControl.className = "form-control error";
  smallTagMessage.innerText = message;
};

// Display success message on specified input
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const getFiledName = (input) =>
  input.id.charAt(0).toUpperCase() + input.id.slice(1);

// Validation functions
const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(input.value.toLowerCase()))) {
    showSuccess(input);
  } else {
    showError(input, `Email is not in valid form!`);
  }
};

const checkRequiredFiled = (inputArr) => {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${getFiledName(element)} is a required filed!`);
    } else {
      showSuccess(element);
    }
  });
};

const checkLength = (inputArr, minLength, maxLength) => {
  inputArr.forEach((element) => {
    if (element.value.length < minLength) {
       showError(
        element,
        `${getFiledName(
          element
        )} has to be between ${minLength} and ${maxLength} characters!`
      );
    } else if (element.value.length > maxLength) {
     showError(
        element,
        `${getFiledName(
          element
        )} has to be between ${minLength} and ${maxLength} characters!`
      );
    } else {
      showSuccess(element);
    }
  });
};

const checkPasswordMatching = (password, repeatedPassword) => {
  if (password.value.trim() === repeatedPassword.value.trim()) {
    showSuccess(repeatedPassword);
  } else {
    showError(repeatedPassword, "The repeated password don't match");
  }
}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequiredFiled([username, password, email, repeatedPassword]);
  checkEmail(email);
  checkLength([username, password, repeatedPassword], 8, 15);
  checkPasswordMatching(password, repeatedPassword);
});
