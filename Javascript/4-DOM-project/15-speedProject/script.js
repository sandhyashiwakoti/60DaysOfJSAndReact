// Get DOM elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const successMessage = document.getElementById("success-message");
const goBackButton = document.getElementById("go-back-btn");

// --- EVENT LISTENERS ---
form.addEventListener("submit", function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Run validation and check if all inputs are valid
  const isFormValid = checkInputs();

  if (isFormValid) {
    // Hide the form and show the success message
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }
});

goBackButton.addEventListener("click", function () {
  // Hide success message, show form, and reset it
  successMessage.classList.add("hidden");
  form.classList.remove("hidden");
  resetForm();
});

// --- VALIDATION FUNCTIONS ---

// Main validation function
function checkInputs() {
  // Trim to remove whitespace
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isUsernameValid = false,
    isEmailValid = false,
    isPasswordValid = false,
    isPassword2Valid = false;

  // Username validation
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Username must be at least 3 characters");
  } else {
    setSuccessFor(username);
    isUsernameValid = true;
  }

  // Email validation
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
    isEmailValid = true;
  }

  // Password validation
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Password must be at least 6 characters");
  } else {
    setSuccessFor(password);
    isPasswordValid = true;
  }

  // Confirm Password validation
  if (password2Value === "") {
    setErrorFor(password2, "Please confirm your password");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords do not match");
  } else {
    setSuccessFor(password2);
    isPassword2Valid = true;
  }

  return isUsernameValid && isEmailValid && isPasswordValid && isPassword2Valid;
}

// --- HELPER FUNCTIONS ---

// Show error message and apply error styles
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div
  const small = formControl.querySelector("small");

  // Add error message and class
  small.innerText = message;
  formControl.className = "form-control error";
}

// Apply success styles
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Reset form fields and validation states
function resetForm() {
  // Clear input values
  username.value = "";
  email.value = "";
  password.value = "";
  password2.value = "";

  // Remove any success/error classes
  const formControls = form.querySelectorAll(".form-control");
  formControls.forEach((control) => {
    control.className = "form-control";
  });
}

// Regex to validate email format
function isEmail(email) {
  // A simple regex for email validation
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
