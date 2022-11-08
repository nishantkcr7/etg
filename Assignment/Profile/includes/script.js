/*
Project: Creating profile
Start date: 07th Nov, 2022
Tech Used: jQuery
*/
// Taking reference of input fields
const inputFname = document.querySelector("#fname");
const inputLname = document.querySelector("#lname");
const inputMobile = document.querySelector("#mobile");
const inputEmail = document.querySelector("#email");
const inputSummary = document.querySelector("#summary");
const inputLanguage = document.querySelector("#language");
const inputEducation = document.querySelector("#graduate");
const inputMovie = document.querySelector("#movie");
const inputDOB = document.querySelector("#dob");

const btnReset = document.querySelector("#reset");
const btnSubmit = document.querySelector("#submit");
let isSubmitClicked = false;
let countError = 0;
btnSubmit.removeAttribute("data-bs-target");
btnSubmit.removeAttribute("data-bs-toggle");
inputArray = [
  inputFname,
  inputLname,
  inputMobile,
  inputEmail,
  inputSummary,
  inputDOB,
];
// Submit Button
$("#submit").click(() => {
  isSubmitClicked = !isSubmitClicked;
  validateForm();
  activateBlur();
  if (countError == 0) {
    btnSubmit.removeAttribute("disabled");
    btnSubmit.setAttribute("data-bs-target", "#staticBackdrop");
    btnSubmit.setAttribute("data-bs-toggle", "modal");
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
});

//   Reset Button
btnReset.addEventListener("click", resetForm);

function resetForm() {
  //   Input fields: Name, Mobile, Email, DOB
  $("input").val("");
  //   Text Area: Summary
  $("#summary").val("");
  //   Radio Buttons: Education
  if ($("input:radio[name='Education']").is(":checked")) {
    $("input:radio[name='Education']").prop("checked", false);
  }
  //   Checkbox: Language
  if ($("input:checkbox[name='Language']").is(":checked")) {
    $("input:checkbox[name='Language']").prop("checked", false);
  }
  //   Select: Movies
  $("#movie").val("");
}

// Function to validate form
function validateForm() {
  countError = 0;
  //   Name, Mobile, Email, Summary, DOB
  inputArray.forEach((el) => {
    el.value == ""
      ? dErrorMsg(el, `${el.name} can't be empty.`)
      : removeErrorMsg(el);
  });
  //   Radio Buttons: Education
  $("input:radio[name='Education']").is(":checked")
    ? removeErrorMsg(inputEducation)
    : dErrorMsg(inputEducation, "\nPlease select education.");

  //   Checkbox: Language
  $("input:checkbox[name='Language']").is(":checked")
    ? removeErrorMsg(inputLanguage)
    : dErrorMsg(inputLanguage, "\nPlease select language.");

  // Select: Movie
  $("#movie").val() == null
    ? dErrorMsg(inputMovie, "Please select movie.")
    : removeErrorMsg(inputMovie);

  if (countError == 0) {
    btnSubmit.setAttribute("data-bs-target", "#staticBackdrop");
    btnSubmit.setAttribute("data-bs-toggle", "modal");

    displayDetails();
    btnSubmit.removeAttribute("disabled");
  } else {
    btnSubmit.setAttribute("disabled", true);
  }
}

const activateBlur = () => {
  if (isSubmitClicked) {
    inputArray.forEach((el) => {
      el.addEventListener("blur", validateForm);
    });
  }
};
// Function to add error msg
function dErrorMsg(el, msg) {
  //     msg = msg.style.text-transform = "capitalize";
  el.nextElementSibling.innerText = msg;
  el.classList.add("error");
  countError++;
}

// Function to remove error msg
function removeErrorMsg(el) {
  el.nextElementSibling.innerText = "";
  el.classList.remove("error");
}

// Function to display values
function displayDetails() {
  document.querySelector("#staticBackdropLabel").innerText =
    "Hi " + inputFname.value;
  // Getting Radio value
  let education = $("input[type='radio'][name='Education']:checked");
  if (education.length > 0) {
    education = education.val();
  }
  //   Getting Checkbox value
  var selectedLang = "";
  var n = $(".checkLanguage:checked").length;
  if (n > 0) {
    $(".checkLanguage:checked").each(function () {
      selectedLang += $(".checkLanguage").val() + " ";
    });
  }
  document.querySelector(".dName").innerText =
    inputFname.value + " " + inputLname.value;

  document.querySelector(".dMobile").innerText = inputMobile.value;
  document.querySelector(".dEmail").innerText = inputEmail.value;
  document.querySelector(".dSummary").innerText = inputSummary.value;
  //   Displaying language

  document.querySelector(".dLanguage").innerText = selectedLang;

  document.querySelector(".dEducation").innerText = education;
  document.querySelector(".dWatched").innerText = inputMovie.value;
  document.querySelector(".dBirth").innerText = inputDOB.value;
}

if (isSubmitClicked) {
  languages = document.querySelectorAll(".checkLanguage");
  languages.forEach((el) => {
    el.addEventListener("change", validateForm);
  });
  inputMovie.addEventListener("change", validateForm);
  console.log();
  document.getElementsByName("Education").forEach((el) => {
    el.addEventListener("change", validateForm);
  });
}

// Validate email ID
const validateEmail = (email) => {
  console.log(`Validate Email Called`);
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
inputEmail.addEventListener("blur", () => {
  validateEmail(inputEmail.value)
    ? removeErrorMsg(inputEmail)
    : dErrorMsg(inputEmail, "Email is not valid");
});
