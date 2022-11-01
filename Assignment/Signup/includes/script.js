// Signup Page Script
// Getting reference of all input field and buttons

let isSubmitClicked = false;
hasError = false;

const inputName = document.querySelector("#name");
const inputDOB = document.querySelector("#dob");
const inputSexValues = document.querySelectorAll("input[name='sex']");
const inputSex = document.querySelector("#inputSex");

const inputEmail = document.querySelector("#email");
const inputAddress = document.querySelector("#address");
const inputSchool = document.querySelector("#school");
const inputDepartment = document.querySelector("#department");
const inputCourse = document.querySelector("#course");
const inputMobile = document.querySelector("#mobile");
const btnReset = document.querySelector("#reset");
const btnSubmit = document.querySelector("#submit");

// Adding event listner on click of submit button
btnSubmit.addEventListener("click", function () {
  isSubmitClicked = !isSubmitClicked;
  validateForm();
  activateBlur();
  if (hasError) {
    btnSubmit.setAttribute("disabled", true);
  } else {
    btnSubmit.setAttribute("disabled", false);
  }
});

// Function to add error msg
const dErrorMsg = (el, msg) => {
  el.nextElementSibling.innerText = msg;
  el.classList.add("error");
};

// Function to remove error msg
const removeErrorMsg = (el) => {
  el.nextElementSibling.innerText = "";
  el.classList.remove("error");
};

// Function to validate form
const validateForm = () => {
  hasError = false;
  //   Validating Name
  if (inputName.value === "") {
    dErrorMsg(inputName, "Name can't be empty");
    hasError = true;
  } else {
    removeErrorMsg(inputName);
    hasError = false;
  }
  //   Validating DOB
  if (inputDOB.value === "") {
    dErrorMsg(inputDOB, "DOB can't be empty");
    hasError = true;
  } else {
    removeErrorMsg(inputDOB);
    hasError = false;
  }
  //   Validating Sex
  let isGenderChecked = 0;

  if (document.querySelector("input[name='sex']:checked") == null) {
    dErrorMsg(inputSex, "Please choose your gender");
    hasError = true;
  } else {
    removeErrorMsg(inputSex);
    hasError = false;
  }

  //   Validating Email
  if (inputEmail.value === "") {
    dErrorMsg(inputEmail, "Email can't be empty.");
    hasError = true;
  } else {
    removeErrorMsg(inputEmail);
    hasError = false;
  }

  //   Validating Address
  if (inputAddress.value === "") {
    dErrorMsg(inputAddress, "Address can't be empty");
    hasError = true;
  } else {
    removeErrorMsg(inputAddress);
    hasError = false;
  }
  //   Validating School
  if (inputSchool.value === "none") {
    dErrorMsg(inputSchool, "Please select school");
    hasError = true;
  } else {
    removeErrorMsg(inputSchool);
    hasError = false;
  }
  //   Validating Department
  if (inputDepartment.value === "none") {
    dErrorMsg(inputDepartment, "Please select department");
    hasError = true;
  } else {
    removeErrorMsg(inputDepartment);
    hasError = false;
  }
  //   Validating Course
  if (inputCourse.value === "none") {
    dErrorMsg(inputCourse, "Please select course");
    hasError = true;
  } else {
    removeErrorMsg(inputCourse);
    hasError = false;
  }
  //   Validating Mobile
  if (inputMobile.value === "") {
    dErrorMsg(inputMobile, "Mobile can't be empty");
    hasError = true;
  } else {
    removeErrorMsg(inputMobile);
    hasError = false;
  }
  if (hasError == false) {
    btnSubmit.setAttribute("disabled", false);
  }
  console.log(hasError);
};

const activateBlur = () => {
  if (isSubmitClicked) {
    inputName.addEventListener("blur", validateForm);
    inputDOB.addEventListener("blur", validateForm);
    inputEmail.addEventListener("blur", validateForm);
    inputAddress.addEventListener("blur", validateForm);
    inputSchool.addEventListener("blur", validateForm);
    inputDepartment.addEventListener("blur", validateForm);
    inputCourse.addEventListener("blur", validateForm);
    inputMobile.addEventListener("blur", validateForm);
  }
};
