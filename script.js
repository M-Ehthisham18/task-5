document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.querySelector("#userForm");
  const genderFields = document.querySelectorAll("input[name='Gender']");

  function showError(input, message) {
    const parent = input.closest("div");
    const errorElem = parent.querySelector(".error");
    input.classList.add("error-border");
    errorElem.textContent = message;
  }

  function clearError(input) {
    const parent = input.closest("div");
    const errorElem = parent.querySelector(".error");
    input.classList.remove("error-border");
    errorElem.textContent = "";
  }

  function validateGender() {
    let isChecked = false;
    genderFields.forEach((radio) => {
      if (radio.checked) isChecked = true;
    });
    const genderErrorElem = genderFields[0].closest(".radio").querySelector(".error");
    if (!isChecked) {
      genderErrorElem.textContent = "Please select your gender";
      return false;
    }
    genderErrorElem.textContent = "";
    return true;
  }

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Name
    const nameField = document.querySelector("#name");
    if (!nameField.value.trim()) {
      showError(nameField, "Please enter your name");
      isValid = false;
    } else {
      clearError(nameField);
    }

    // Email
    const emailField = document.querySelector("#email");
    if (!emailField.value.trim()) {
      showError(emailField, "Please enter your email");
      isValid = false;
    } else {
      clearError(emailField);
    }

    // Gender
    if (!validateGender()) {
      isValid = false;
    }

    // Age
    const ageField = document.querySelector("#age");
    if (!ageField.value.trim()) {
      showError(ageField, "Please enter your age");
      isValid = false;
    } else {
      clearError(ageField);
    }

    // State
    const stateField = document.querySelector("#state");
    if (!stateField.value) {
      showError(stateField, "Please select your state");
      isValid = false;
    } else {
      clearError(stateField);
    }

    if (isValid) {
      alert("Form submitted successfully!");
      userForm.reset();
    }
  });
});
