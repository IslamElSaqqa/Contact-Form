var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() { 
    var name = document.getElementById('contact-name').value.trim();
    let nameRegex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
    // check the basic validation
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required!';
        return false;
    }
    // check data format validation!
    if (!name.match(nameRegex)) {
        nameError.innerHTML = 'Invalid name!';
        return false;
    } 
    nameError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #63E6BE;"></i>';
    return true;
}
    
function validatePhone() {
    var phone_no = document.getElementById('contact-phone').value;
    let phoneRegex = /^[0-9]{11}$/;
    // check if empty phone field
    if (phone_no.length === 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phone_no.length !== 11) {
        phoneError.innerHTML = "Phone must be 11 digits";
        return false;
    }
        // Check data format at client-side before server-side
    if (!phone_no.match(phoneRegex) ) {
        phoneError.innerHTML = "phone number must be digits only";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #63E6BE;"></i>';
    return true;
}
function validateEmail() { 
    var email = document.getElementById('contact-email').value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
    if (email.length == 0) {
        emailError.innerHTML = "Email Address is required";
        return false;
    }
    // Check data format at client-side before server-side
    if (!email.match(emailRegex)) { 
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #63E6BE;"></i>';
    return true;
} 
function validateMessage() { 
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) { 
        messageError.innerHTML = left+ ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-lg" style="color: #63E6BE;"></i>';
    return true;
}
function validateForm() { 
    if (!validateName() || !validateEmail() || !validateMessage() || !validatePhone()) { 
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill in all fields!';
        setTimeout(function () { submitError.style.display = 'none' } ,3500)
        return false;
    }



}