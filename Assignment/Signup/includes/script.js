// Signup Page Script
// Getting reference of all input field and buttons

let isSubmitClicked = false;

const inputFname = document.querySelector("#fname");
const inputLname = document.querySelector("#lname");
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
let countError = 0;
// Adding event listner on click of submit button
btnSubmit.addEventListener("click", function () {
  isSubmitClicked = !isSubmitClicked;
  validateForm();
  activateBlur();
  if (countError == 0) {
    btnSubmit.removeAttribute("disabled");
    alert(`Hi ${inputFname.value}, your form is submitted.`);
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
});

// Function to add error msg
const dErrorMsg = (el, msg) => {
  //     msg = msg.style.text-transform = "capitalize";
  el.nextElementSibling.innerText = msg;
  el.classList.add("error");
  countError++;
};

// Function to remove error msg
const removeErrorMsg = (el) => {
  el.nextElementSibling.innerText = "";
  el.classList.remove("error");
};
inputArray = [
  inputFname,
  inputLname,
  inputDOB,
  inputEmail,
  inputAddress,
  inputSchool,
  inputDepartment,
  inputCourse,
  inputMobile,
];
// Function to validate form
const validateForm = () => {
  countError = 0;
  //   Validating Gender
  if (document.querySelector("input[name='sex']:checked") == null) {
    dErrorMsg(inputSex, "Please choose your gender");
  } else {
    removeErrorMsg(inputSex);
  }
  inputArray.forEach((el) => {
    el.value == ""
      ? dErrorMsg(el, `${el.name} can't be empty.`)
      : removeErrorMsg(el);
  });
  if (countError == 0) {
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
};

const activateBlur = () => {
  if (isSubmitClicked) {
    inputArray.forEach((el) => {
      el.addEventListener("blur", validateForm);
    });
  }
};
const preventNumber = (event) => {
  // a-z 97 122
  if (event.key.charCodeAt() >= 97 && event.key.charCodeAt() <= 122)
    return true;
  // A-Z 65 90
  if (event.key.charCodeAt() >= 65 && event.key.charCodeAt() <= 90) return true;
  // space
  if (event.key.charCodeAt() == 32) return true;
  // backspace
  if (event.key.charCodeAt() == 66) return true;
  // tab
  if (event.key.charCodeAt() == 84) return true;
  else {
    event.preventDefault();
    return false;
  }
};
// Preventing from inputing number inside the name
inputFname.addEventListener("keydown", preventNumber);
inputLname.addEventListener("keydown", preventNumber);

btnReset.addEventListener("click", () => {
  location.reload();
});

// Preventing the user from selecting previous dates
currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (String(date).length == 1) {
  date = "0" + date;
}
if (String(month).length == 1) {
  month = "0" + month;
}
inputDOB.setAttribute("min", year + "-" + month + "-" + date);
