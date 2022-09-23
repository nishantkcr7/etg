console.log(document.querySelector(".modal-dialog"));
console.log(document.querySelector(".modal-dialog").id);
document.querySelector(".modal-dialog").id = "abcd";
console.log(document.querySelector(".modal-dialog").id);
const emails = [
  "abc@d.com",
  "demo@mail.com",
  "nishantkcr7@gmail.com",
  "nishant.k@etg.digital",
];
console.log(emails);

const modalBody = document.querySelector(".modal-body");

const btnCheck = document.getElementById("btnCheck");
btnCheck.addEventListener("click", function () {
  const inputEmail = document.getElementById("inputEmail").value;
  console.log(inputEmail);
  if (inputEmail === "") {
    document.getElementById("emailHelp").innerText = "Please Enter the email";
  }
  if (
    emails.find(function (email) {
      return inputEmail === email;
    })
  ) {
    console.log(`Email Exists`);
    modalBody.innerText = "😍";
  } else {
    console.log(`Email Do no exists`);
    modalBody.innerText = "😭";
  }
});
