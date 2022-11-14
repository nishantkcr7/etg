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
const dUserName = document.querySelector(".dUserName");
const inputDisplayName = document.querySelector(".inputDisplayName");
const inputDisplayMobile = document.querySelector(".inputDisplayMobile");
let isSubmitClicked = false;
let isBtnEditToggled = false;
let isLoginSuccess = false;
let countError = 0;
const userCookieObj = {};

// 1
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
    resetForm();
    setCookie(inputUsername.value, inputNumber.value);
  }
});

// 2
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

// 3
function activateBlur() {
  inputUsername.addEventListener("blur", validateForm);
  inputNumber.addEventListener("blur", validateForm);
}

// 4
function enableBtn() {
  btnSubmit.removeAttribute("disabled");
  isLoginSuccess = true;
  // btnSubmit.classList.remove("disabled");
}

// 5
function showAccount() {
  inputDisplayMobile.value = inputNumber.value;
  inputDisplayName.value = inputUsername.value;
  dUserName.innerText = inputUsername.value.split(" ")[0];
  // inputDisplayMobile.value = userCookieObj.username;
  // inputDisplayName.value = userCookieObj.usermobile;

  dLogin.classList.add("d-none");
  pageStatus.innerText = "Account";
  welcomeMsg.innerText = "welcome back to your ";
  dAccount.classList.remove("d-none");
}

// 6
function setCookie(username, mobile) {
  document.cookie = `username=${username}; expires=Sat, 12 Nov 2022 12:00:00 UTC`;
  document.cookie = `usermobile = ${mobile}; expires=Sat, 12 Nov 2022 12:00:00 UTC`;
  fetchCookie(document.cookie);
}

btnDelete.addEventListener("click", function () {
  hideAccount();
  deleteCookie(inputDisplayName.value, inputDisplayMobile.value);
});

btnEdit.addEventListener("click", function () {
  enableInputField();
  btnEditToggle();
});

function fetchCookie(cookie) {
  const cookieArr = cookie.split("; ");
  cookieArr.forEach((c) => {
    userCookieObj[c.split("=")[0]] = c.split("=")[1];
  });
}

function deleteCookie(username, mobile) {
  document.cookie = `username=${username}; expires=Wed, 10 Nov 2022 12:00:00 UTC`;
  document.cookie = `usermobile = ${mobile}; expires=Wed, 10 Nov 2022 12:00:00 UTC`;
}

function btnEditToggle() {
  isBtnEditToggled = !isBtnEditToggled;
  isBtnEditToggled
    ? (btnEdit.innerText = "Save")
    : (btnEdit.innerText = "Edit");
  isBtnEditToggled ? enableInputField() : disableInputField();
  setCookie(inputDisplayName.value, inputDisplayMobile.value);
}
function enableInputField() {
  inputDisplayName.removeAttribute("readonly");
  inputDisplayMobile.removeAttribute("readonly");
}
function disableInputField() {
  inputDisplayName.setAttribute("readonly", true);
  inputDisplayMobile.setAttribute("readonly", true);
}

function hideAccount() {
  dLogin.classList.remove("d-none");
  pageStatus.innerText = "Login";
  welcomeMsg.innerText = "to continue please";
  dAccount.classList.add("d-none");
}

function disableBtn() {
  // btnSubmit.classList.add("disabled");
  btnSubmit.setAttribute("disabled", true);
}

function showError(element) {
  countError++;
  element.nextElementSibling.classList.remove("d-none");
}

function hideError(element) {
  element.nextElementSibling.classList.add("d-none");
}

function resetForm() {
  inputUsername.value = "";
  inputNumber.value = "";
}
