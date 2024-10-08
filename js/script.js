document.getElementById('freeTrialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    clearErrors();

    let isValid = true;
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!firstName) {
        showError('firstNameError', 'First name is required.');
        isValid = false;
    }

    if (!lastName) {
        showError('lastNameError', 'Last name is required.');
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phoneNumber.match(phonePattern)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number.');
        isValid = false;
    }

    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };
        console.log(formData);

        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        
        document.getElementById('freeTrialForm').reset();
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'block';
    errorElement.textContent = message;
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(function(element) {
        element.style.display = 'none';
        element.textContent = '';
    });

    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
}
