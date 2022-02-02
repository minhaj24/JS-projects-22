// retreiving html elements from the form

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



function showError(input, message) {

    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


form.addEventListener('submit', function(e) {

    e.preventDefault();
    console.log(username.value);

    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});

form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(email.value === '') {
        showError(email, 'email is required')
    } else {
        showSuccess(email);
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(password.value === ''){
        showError(password, 'password is required')

    } else {
        showSuccess(password);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(password2.value === '') {
        showError(password2, 'password is required');
    } else {
        showSuccess(password2);
    }

});