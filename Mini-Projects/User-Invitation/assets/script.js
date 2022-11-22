$(document).ready(() => {
  $("input[type='submit']").click(() => {
    // Getting reference of input boxes
    const inputName = $("input[name='name']");
    const inputAge = $("input[name='age']");
    // Getting Name from the user
    const guestName = $(inputName).val();
    // Getting Age from the user
    const guestAge = $(inputAge).val();
    // Validating the guest data

    // Blank Input
    guestName === ""
      ? showError(inputName, "Please Enter Guest Name")
      : hideError(inputName);

    guestAge === "" && guestAge < 0
      ? showError(inputAge, "Please Enter the Age")
      : hideError(inputAge);
    //   Age Less than 1 year
    guestAge != "" && guestAge < 1
      ? showError(inputAge, "Age can't be less than 1 year.")
      : hideError(inputAge);
  });
});

function showError(el, msg) {
  el.next().text(msg);
}

function hideError(el) {
  el.next().text("");
}
/*
// Validating Age Using Promises
function validateAge(age) {
  return new Promise((resolve, reject) => {
    if (age != "" && age > 0) {
      resolve([true]);
    }
    if (age == "") {
      reject([false, "Age can't be empty."]);
    }
    if (age != "" && age < 0) {
      reject([false, "Age can't be less than 0."]);
    }
  })
    .then((msg) => {
      console.log(msg)
    })
    .catch((msg) => {
      console.log(msg)
    });
}
*/
