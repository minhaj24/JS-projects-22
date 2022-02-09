// retreiving html elements from the form

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Error function declaration

function showError(input, message) {

    const formControl = input.parentElement
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

// Successful form submission

function showSuccess(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// Input Fields validation function

function inputChecker(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === ''){
            showError(input, `${properId(input)} is required`);
        } else { showSuccess(input)}
    })
}

// Correct format of input ID

     function properId(input) {
         return input.id.charAt(0).toUpperCase() + input.id.slice(1);
     }

// Check length of provided inputs in password and username

     function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(input, `${properId(input)} should be atleast ${min} characters`)
        } else if (input.value.length > max) {
            showError(input, `${properId(input)} should be less than ${max} characters`)
        } else {
            showSuccess(input)
        }
     }

// Valid email address input check function

     function validEmail(input) {
        const  re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(re.test(input.value.trim()) ) {
            showSuccess(input);
        } else {
            showError (input, `${properId(input)} is not valid`);
        }
     }

// Passwords field match function

     function passwordMatch(input1, input2) {
         if (input1.value !== input2.value) {
             showError(input2, "Passwords dont match")
         } 
     }

// Event listener associated function calls for submit button   

form.addEventListener('submit', function(e) {

    e.preventDefault();
    console.log(username.value);

  inputChecker([username, email, password, password2]);
  checkLength(username,3,10);
  checkLength(password,6,30);
  validEmail(email);
  passwordMatch(password, password2);

});

    
