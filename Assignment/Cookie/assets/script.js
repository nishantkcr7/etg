// Getting reference of input boxes
const inputName = document.querySelector("#name");
const inputJob = document.querySelector("#job");
const btnSubmit = document.querySelector(".btnSubmit");
let isSubmitClicked = false;
let countError = 0;

// Adding event listner on click of submit button
btnSubmit.addEventListener("click", function () {
  isSubmitClicked = !isSubmitClicked;
  validateForm();
  activateBlur();
  if (countError == 0) {
    enableBtn();
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
});

function validateForm() {
  console.log(`ValidateForm() called`);
  inputName.value === "" ? showError(inputName) : hideError(inputName);
  inputJob.value === "" ? showError(inputJob) : hideError(inputJob);
}

function disableBtn() {
  btnSubmit.classList.add("disabled");
}

function enableBtn() {
  btnSubmit.classList.remove("disabled");
}

function showError(element) {
  element.nextElementSibling.classList.remove("d-none");
}

function hideError(element) {
  element.nextElementSibling.classList.add("d-none");
}

function activateBlur() {
  inputName.addEventListener("blur", validateForm);
  inputJob.addEventListener("blur", validateForm);
}
