const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("passwrod2");

// General purpose functions

// Display error message on specified input
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

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    const size = password.value.length;
    return size > 8 ? true : false;
}

const validateRepeatedPassword = (password, password2) => {
    const pValue = password.value;
    const p2Value = password2.value;
    retrun (pValue.trim() ===  p2Value.trim()) ? true : false;
}

// Validation functions
const checkRequiredFiled = (inputArr) => {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, "Required filed!");
    } else {
      showSuccess(element);
    }
  });
};

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequiredFiled([username, password, email, password2]);
});
