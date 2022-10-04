document.querySelector(".guessed-number").focus();
document
  .querySelector(".guessed-number")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") document.querySelector(".submit-btn").click();
  });

const displayMsg = (msg) => {
  document.querySelector(".msg").textContent = msg;
};
let minLife = 1;
let maxLife = 20;
let highScore = 0;
let gameScore = 5;
const computerNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".submit-btn").addEventListener("click", function () {
  const enteredNumber = document.querySelector(".guessed-number").value;
  document.querySelector(".reset").addEventListener("click", function () {
    location.reload();
  });
  if (!enteredNumber) {
    // document.querySelector(".msg").textContent = "No a Number...";
    displayMsg("Not a number... 🚫");
  } else if (gameScore >= minLife && gameScore <= maxLife) {
    if (computerNumber == enteredNumber) {
      // document.querySelector(".msg").textContent = "Perfect... 😎";
      displayMsg("Perfect... 😎");
      document.querySelector(".score").textContent++;
      gameScore += 1;
      if (highScore < computerNumber) highScore = computerNumber;
      document.querySelector(".hscore").textContent = highScore;
      document.querySelector(".computer-score").value = computerNumber;
      document.querySelector("body").style.backgroundColor =
        "rgb(162, 250, 162)";
    }
    if (computerNumber != enteredNumber) {
      /* computerNumber < enteredNumber
        ? (document.querySelector(".msg").textContent = "Too High... 📈")
        : (document.querySelector(".msg").textContent = "Too Low... 📉"); */
      computerNumber < enteredNumber
        ? displayMsg("Too High... 📈")
        : displayMsg("Too Low... 📉");
      document.querySelector(".score").textContent--;
      gameScore--;
    }
    // else if (computerNumber < enteredNumber) {
    //   document.querySelector(".msg").textContent = "Too High... 📈";
    //   document.querySelector(".score").textContent--;
    //   gameScore--;
    // } else if (computerNumber > enteredNumber) {
    //   document.querySelector(".msg").textContent = "Too Low... 📉";
    //   document.querySelector(".score").textContent--;
    //   gameScore--;
    // }
  } else if (gameScore < minLife) {
    // document.querySelector(".msg").textContent = "You Lost... 😭";
    displayMsg("You Lost... 😭");
    document.querySelector(".submit-btn").setAttribute("disabled", "");
    document.querySelector(".guessed-number").setAttribute("disabled", "");
    document.querySelector("body").style.backgroundColor = "rgb(255, 129, 129)";
    document.querySelector(".computer-score").value = computerNumber;
  } else if (gameScore > maxLife) {
    // document.querySelector(".msg").textContent = "You Won... 😁";
    displayMsg("You Won... 😁");
    document.querySelector(".submit-btn").setAttribute("disabled", "");
    document.querySelector(".guessed-number").setAttribute("disabled", "");
  }
  console.log(
    "Entered Number: " +
      enteredNumber +
      " Computer Number: " +
      computerNumber +
      " GameScore: " +
      gameScore
  );
});

let msg = document.querySelector(".msg").textContent;
console.log(msg);
