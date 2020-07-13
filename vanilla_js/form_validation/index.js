const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email')
const password = document.getElementById('password');
const password_repeat = document.getElementById('passwrod-repeat');

// General purpose functions

// Display error message on specified input 
const showError = (input, message) => {
    const formControl = input.parentElement;
    const smallTagMessage = formControl.querySelector('small');
    formControl.className = 'form-control error';
    smallTagMessage.innerText = message;
}

// Display success message on specified input
const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (username.value === '') {
        showError(username, 'The username is not valid');
    } else {
        showSuccess(username, 'The username is valid');
    }
    
})