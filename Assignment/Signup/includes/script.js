// Signup Page Script
// Getting reference of all input field and buttons

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
  validateForm();
});

// Function to add error msg
const dErrorMsg = (el, msg) => {
  el.insertAdjacentHTML("afterend", `<span class="msg-error">${msg}</span>`);
  el.classList.add("error");
};

// Function to validate form
const validateForm = () => {
  //   Validating Name
  if (inputName.value === "") {
    dErrorMsg(inputName, "Name can't be empty");
  }
  //   Validating DOB
  if (inputName.value === "") {
    dErrorMsg(inputDOB, "DOB can't be empty");
  }
  //   Validating Sex
  let isGenderChecked = 0;
  for (const sex of inputSexValues) {
    if (sex.checked) {
      isGenderChecked = 1;
      break;
    }
  }
  if (isGenderChecked === 0) {
    dErrorMsg(inputSex, "Please choose your gender");
  }
  //   Validating Email
  if (inputEmail.value === "") {
    dErrorMsg(inputEmail, "Email can't be empty.");
  }

  //   Validating Address
  if (inputAddress.value === "") {
    dErrorMsg(inputAddress, "Address can't be empty");
  }
  //   Validating School
  if (inputSchool.value === "none") {
    dErrorMsg(inputSchool, "Please select school");
  }
  //   Validating Department
  if (inputDepartment.value === "none") {
    dErrorMsg(inputDepartment, "Please select department");
  }
  //   Validating Course
  if (inputCourse.value === "none") {
    dErrorMsg(inputCourse, "Please select course");
  }
  //   Validating Mobile
  if (inputMobile.value === "") {
    dErrorMsg(inputMobile, "Mobile can't be empty");
  }
};
