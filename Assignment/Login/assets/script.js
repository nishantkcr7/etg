// Getting reference of input boxes
const inputUsername = document.querySelector("#username");
const inputNumber = document.querySelector("#phone");
const btnSubmit = document.querySelector(".btnSubmit");
const dLogin = document.querySelector(".dLogin");
const dAccount = document.querySelector(".dAccount");
const pageStatus = document.querySelector(".pageStatus");
const welcomeMsg = document.querySelector(".welcomeMsg");
const btnEdit = document.querySelector(".btnEdit");
const btnDelete = document.querySelector(".btnDelete");
const inputDisplayName = document.querySelector(".inputDisplayName");
const inputDisplayMobile = document.querySelector(".inputDisplayMobile");
let isSubmitClicked = false;
let isBtnEditToggled = false;
let isLoginSuccess = false;
let countError = 0;

btnDelete.addEventListener("click", function () {
  hideAccount();
});

btnEdit.addEventListener("click", function () {
  enableInputField();
  btnEditToggle();
});

function btnEditToggle() {
  isBtnEditToggled = !isBtnEditToggled;
  isBtnEditToggled
    ? (btnEdit.innerText = "Save")
    : (btnEdit.innerText = "Edit");
  isBtnEditToggled ? enableInputField() : disableInputField();
}
function enableInputField() {
  inputDisplayName.removeAttribute("readonly");
  inputDisplayMobile.removeAttribute("readonly");
}
function disableInputField() {
  inputDisplayName.setAttribute("readonly", true);
  inputDisplayMobile.setAttribute("readonly", true);
}

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
  if (isLoginSuccess) {
    showAccount();
  }
});
function showAccount() {
  dLogin.classList.add("d-none");
  pageStatus.innerText = "Account";
  welcomeMsg.innerText = "welcome back to your ";
  dAccount.classList.remove("d-none");
}

function hideAccount() {
  dLogin.classList.remove("d-none");
  pageStatus.innerText = "Login";
  welcomeMsg.innerText = "to continue please";
  dAccount.classList.add("d-none");
}

function validateForm() {
  countError = 0;

  inputUsername.value === ""
    ? showError(inputUsername)
    : hideError(inputUsername);
  inputNumber.value === "" ? showError(inputNumber) : hideError(inputNumber);
  if (countError == 0) {
    enableBtn();
  }
}

function disableBtn() {
  // btnSubmit.classList.add("disabled");
  btnSubmit.setAttribute("disabled", true);
}

function enableBtn() {
  btnSubmit.removeAttribute("disabled");
  isLoginSuccess = true;
  // btnSubmit.classList.remove("disabled");
}

function showError(element) {
  countError++;
  element.nextElementSibling.classList.remove("d-none");
}

function hideError(element) {
  element.nextElementSibling.classList.add("d-none");
}

function activateBlur() {
  inputUsername.addEventListener("blur", validateForm);
  inputNumber.addEventListener("blur", validateForm);
}
