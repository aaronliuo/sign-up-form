function formValidity(event) {
    const password = document.getElementById('user-password');
    const confirmPassword = document.getElementById('confirm-password');
    for(let i=0; i<inputs.length; i++) {
        const errorMessage = document.querySelector('#' + inputs[i].id + ' + .error');
        if(inputs[i].value.length == 0) {
            inputs[i].setCustomValidity("Error");
            errorMessage.textContent = "*Please fill out this field.";
            event.preventDefault();
        }
    }
    
    const email = document.getElementById('user-email');
    if(!email.validity.valid) {
        document.querySelector('#user-email + .error').textContent = "*Invalid email";
    }

    const phoneNumber = document.getElementById('phone');
    if(!/^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(phoneNumber.value)) {
        phoneNumber.setCustomValidity("Error");
        document.querySelector('#phone + .error').textContent = "*Invalid phone number.";
        event.preventDefault();
    }

    if(password.value.length == 0) {
        return;
    }
    else if(password.value != confirmPassword.value) {
        password.setCustomValidity("Error");
        confirmPassword.setCustomValidity("Error");
        document.querySelector('#user-password + .error').textContent = "*Please put in same passwords.";
        event.preventDefault();
    }
}

function updateValidity(event) {
    const errorMessage = document.querySelector('#' + event.target.id + ' + .error');
    if(event.target.value.length == 0) {
        event.target.setCustomValidity("Error");
        errorMessage.textContent = "*Please fill out this field.";
    }
    else {
        event.target.setCustomValidity("");
        errorMessage.textContent = "";
    }
}


const inputs = document.querySelectorAll('input');
const form = document.getElementById('sushi-form');
form.addEventListener('submit', formValidity);
inputs.forEach((input) => {
    input.addEventListener('input', updateValidity);
})
