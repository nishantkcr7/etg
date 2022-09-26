const btnReset = document.getElementById("btnReset");
const loginSuccessArea = document.querySelector(".login-success");
const inputEmail = document.querySelector(".input-email");
const emailHelp = document.getElementById("emailHelp");

const inputPassword = document.querySelector(".input-password");

const pwdHas8Char = document.getElementById("Eightchar");
const pwdHasUperCase = document.getElementById("uppercase");
const pwdHasLowerCase = document.getElementById("lowercase");
const pwdHasNumber = document.getElementById("hasnumber");
const pwdHasSpecial = document.getElementById("hasspecial");
const emails = [
  "abc@d.com",
  "demo@mail.com",
  "nishantkcr7@gmail.com",
  "nishant.k@etg.digital",
];
const modalBody = document.querySelector(".modal-body");

const btnEmailCheck = document.getElementById("btnEmailCheck");

const firstName = document.querySelector(".input-first-name");
const lastName = document.querySelector(".input-last-name");
const emailResume = document.querySelector(".input-email");
const panResume = document.querySelector(".input-pan");
const collegeName = document.querySelector(".input-college-name");
const universityName = document.querySelector(".input-university-name");
const registrationNumber = document.querySelector(".input-registration-name");
const courseDuration = document.querySelector(".input-course-duration");
const degree = document.getElementsByName("degree");

const isMarried = document.getElementsByName("ismarried");

const submitForm = document.getElementById("submit-form");

submitForm.addEventListener("click", function () {
  console.log(`clicked`);
  console.log(collegeName.value);
});

btnEmailCheck.addEventListener("click", function () {
  inputEmailValue = inputEmail.value;
  if (inputEmailValue === "") {
    emailHelp.innerText = "Please Enter the email";
  } else {
    if (
      emails.find(function (email) {
        return inputEmailValue === email;
      })
    ) {
      loginSuccessArea.classList.remove("hide");
      loginSuccessArea.classList.remove("text-danger");
      loginSuccessArea.classList.add("text-success");
      loginSuccessArea.innerText = "Congrats, you are a valid user 🤩";
    } else {
      loginSuccessArea.classList.remove("hide");
      loginSuccessArea.classList.add("text-danger");
      loginSuccessArea.innerText = "Oops! You are not a valid user 😢";
    }
  }
});

// Button Reset
btnReset.addEventListener("click", () => {
  inputEmail.value = "";
  loginSuccessArea.classList.add("hide");
});

const lis = document.querySelectorAll("li");
lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    li.children[0].select();
    document.execCommand("copy");
    li.children[0].blur();
    lis.forEach((li) => {
      li.children[2].classList.add("hide");
      li.children[1].classList.remove("hide");
    });
    li.children[2].classList.remove("hide");
    li.children[1].classList.add("hide");
    // li.children[0].classList.add("user-select:all");
  });
});

inputEmail.addEventListener("input", () => {
  emailHelp.innerText = "";
});

inputPassword.addEventListener("input", function (e) {
  let passwordStr = "";
  passwordStr += e.target.value;
  checkPassword(passwordStr);
});

function checkPassword(pwd) {
  removeAllClass();
  pwdArray = pwd.split("");
  // Checking if password lenght is greater than 8 characters
  if (pwdArray.length > 7) {
    pwdHas8Char.classList.add("text-success");
  }
  pwdArray.forEach((ch) => {
    // Checking if it contains lower case character
    if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
      pwdHasLowerCase.classList.add("text-success");
    }
    // Checking if it contains Upper case character
    if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
      pwdHasUperCase.classList.add("text-success");
    }
    // Checking if it contains Number
    if (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57) {
      pwdHasNumber.classList.add("text-success");
    }
    // Checking if it contains Special character
    if (
      ch.charCodeAt() == 64 ||
      ch.charCodeAt() == 35 ||
      ch.charCodeAt() == 95
    ) {
      pwdHasSpecial.classList.add("text-success");
    }
  });
}

function removeAllClass() {
  pwdHas8Char.classList = "";
  pwdHasUperCase.classList = "";
  pwdHasLowerCase.classList = "";
  pwdHasNumber.classList = "";
  pwdHasSpecial.classList = "";
}

// ================ ADDING SKILLS ===============

const inputSkill = document.querySelector(".input-skill");
const btnAddSkill = document.querySelector(".add-skill");
const skillsItem = document.querySelector(".skills-item");
let countSkill = 0;
btnAddSkill.addEventListener("click", function () {
  const skill = inputSkill.value;
  skillsItem.insertAdjacentHTML(
    "afterbegin",
    `
  <p class="skill-item" class="fs-4"><input type="checkbox" onclick="emText(this)"  class="form-check-input me-2">${skill}<i onclick="deleteSkill(this)" class="bi bi-patch-minus ms-2 remove-skill cursor-pointer" style="cursor:pointer"></i></p>
  `
  );
  getTotalSkills();
});

const getTotalSkills = () => {
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((skill) => {});
};

function deleteSkill(t) {
  t.parentElement.parentElement.removeChild(t.parentElement);
}

function emText(t) {
  if (t.checked) t.parentElement.classList.add("text-decoration-line-through");
  else t.parentElement.classList.remove("text-decoration-line-through");
}

// =========================RESUME====================

function setResume() {
  console.log("Set resume");
  document.querySelector(".resume-name").innerText =
    document.querySelector(".input-first-name").value +
    " " +
    document.querySelector(".input-last-name").value;
  document.querySelector(".resume-email").innerText =
    document.querySelector(".input-resume-email").value;
  document.querySelector(".resume-PAN").innerText =
    document.querySelector(".input-pan").value;
  document.querySelector(".resume-college-name").innerText =
    document.querySelector(".input-college-name").value;
  document.querySelector(".resume-university-name").innerText =
    document.querySelector(".input-university-name").value;
  document.querySelector(".resume-registration").innerText =
    document.querySelector(".input-registration-number").value;
  document.querySelector(".resume-course-duration").innerText =
    document.querySelector(".input-course-duration").value;
  document.querySelector(".resume-degree").innerText =
    document.querySelector(".input-degree").value;
  document.querySelector(".resume-is-married").innerText =
    document.getElementById("ismarried").value;
  document.querySelector(".resume-prefered-team").innerText =
    document.getElementById("input-prefered-team").value;
}
