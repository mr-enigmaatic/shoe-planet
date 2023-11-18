// Login and SignUp form script

document.addEventListener('DOMContentLoaded', function () {
    // Sign Up Form Validation
    document.getElementById('signup-form').addEventListener('submit', function (event) {
      event.preventDefault();
      validateSignupForm();
    });
  
    // Login Form Validation
    document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault();
      validateLoginForm();
    });
  
    // Forgot Password Form Validation
    document.getElementById('forgot-password-form').addEventListener('submit', function (event) {
      event.preventDefault();
      validateForgotPasswordForm();
    });
  });
  
  function validateSignupForm() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
  
    const nameRegex = /^[A-Za-z ]{1,15}$/;
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  
    let signupErrorMessage = document.getElementById('signup-error-message');
    signupErrorMessage.innerHTML = '';
  
    if (!nameRegex.test(name)) {
      signupErrorMessage.innerHTML = 'Name should contain only alphabets and have a maximum of 15 characters.';
      return;
    }

    if (!emailRegex.test(email)) {
        signupErrorMessage.innerHTML = 'Enter a valid Email';
        return;
    }
  
    if (!passwordRegex.test(password)) {
      signupErrorMessage.innerHTML = 'Password should be a minimum of 8 characters and include at least one letter and one number.';
      return;
    }
  
    if (password !== confirmPassword) {
      signupErrorMessage.innerHTML = 'Password and Confirm Password do not match.';
      return;
    }
  
    // Submit the form if validation passes
    document.getElementById('signup-form').submit();
  }
  
  
  function validateLoginForm() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
  
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  
    let loginErrorMessage = document.getElementById('login-error-message');
    loginErrorMessage.innerHTML = '';

    if (!emailRegex.test(email)) {
        loginErrorMessage.innerHTML = 'Enter a valid Email';
        return;
    }
  
    if (!passwordRegex.test(password)) {
      loginErrorMessage.innerHTML = 'Password should be a minimum of 8 characters and include at least one letter and one number.';
      return;
    }
  
    // Submit the form if validation passes
    document.getElementById('login-form').submit();
  }
  
  function validateForgotPasswordForm() {
    let email = document.getElementById('forgot-email').value;
    let otp = document.getElementById('forgot-otp').value;
    let newPassword = document.getElementById('new-password').value;
    let confirmNewPassword = document.getElementById('confirm-new-password').value;
  
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  
    let forgotPasswordErrorMessage = document.getElementById('forgot-password-error-message');
    forgotPasswordErrorMessage.innerHTML = '';
  
    if (!emailRegex.test(email)) {
        forgotPasswordErrorMessage.innerHTML = 'Enter a valid Email';
        return;
    }

    if (!passwordRegex.test(newPassword)) {
      forgotPasswordErrorMessage.innerHTML = 'Password should be a minimum of 8 characters and include at least one letter and one number.';
      return;
    }
  
    if (newPassword !== confirmNewPassword) {
      forgotPasswordErrorMessage.innerHTML = 'New Password and Confirm New Password do not match.';
      return;
    }
  
    // Submit the form if validation passes
    document.getElementById('forgot-password-form').submit();
  }
  
  function sendOTP() {
    let email = document.getElementById('forgot-email').value;
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        alert('OTP sent successfully!');
    }else{
        document.getElementById('forgot-email').value = 'Enter valid email'
    }
  }
  