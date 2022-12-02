const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const highScore = document.getElementById("highScore");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const errorMsg = document.querySelector(".error-msg");
const sectionGame = document.querySelector(".section-game");
const sectionInput = document.querySelector(".section-input");
const sectionGameResult = document.querySelector(".section-game-result");
const resultTable = document.querySelector(".resultTable");
const gameContainer = document.querySelector(".game-container");
const inputUserName = document.getElementById("username");
const btnShare = document.querySelector(".btn-share");
const btnShowLeaderboard = document.getElementById("showLeaderboard");
const btnClearLB = document.querySelector(".btnClearLB");
const inputPassword = document.getElementById("input-password");
const errorMsgPassword = document.querySelector(".error-msg-password");
const sectionClearLB = document.querySelector(".section-clear-lb");
const sectionClearLBInput = document.querySelector(".section-clear-lb--input");
const sectionBtnClearLB = document.querySelector(".section-btnClearLB");
let toggleBtnLeaderboard = true;
let cards;
let playerName;
let interval;
let firstCard = false;
let secondCard = false;
let secondsValue;
let minutesValue;
//Items array
const items = [
  { name: "ace", image: "assets/img/ace.png" },
  { name: "jack", image: "assets/img/jack.png" },
  { name: "joker", image: "assets/img/jocker.png" },
  { name: "king", image: "assets/img/king.png" },
  { name: "queen", image: "assets/img/queen.png" },
  { name: "aspade", image: "assets/img/aspade.png" },
  { name: "aheart", image: "assets/img/aheart.png" },
  { name: "2heart", image: "assets/img/2heart.png" },
  { name: "2spade", image: "assets/img/2spade.png" },
  { name: "3heart", image: "assets/img/3heart.png" },
  { name: "3spade", image: "assets/img/3spade.png" },
  { name: "4heart", image: "assets/img/4heart.png" },
];

window.onload = () => {
  inputUserName.focus();
};

// Displaying leaderboard
btnShowLeaderboard.addEventListener("click", function () {
  if (toggleBtnLeaderboard) {
    this.innerText = "Hide Leaderboard";
    displayResult();
  } else {
    this.innerText = "Show Leaderboard";
    sectionGameResult.classList.add("d-none");
  }
  toggleBtnLeaderboard = !toggleBtnLeaderboard;
  // Scroll to result section
  sectionGameResult.scrollIntoView({ behavior: "smooth" });
});

// FUNCTION: displayResult() will fetch best record from the localStorage and display in UI rank wise.
function displayResult() {
  if (isScoreAvailable()) {
    resultTable.innerHTML = `
    <tr>
      <th>Rank</th>
      <th>Player Name</th>
      <th>Time Taken</th>
    </tr>
    `;
    let sortedScores = getSortedScores();
    sortedScores.forEach((score, i) => {
      let currentUserClass =
        score[1].split("score-")[1] == playerName ? "light-dark" : "";
      resultTable.insertAdjacentHTML(
        "beforeend",
        `<tr class=${currentUserClass}>
      <td>#${i + 1}</td>
      <td>${score[1].split("score-")[1]}</td>
      <td>${score[0]}</td>
    </tr>`
      );
    });
    // sectionBtnClearLB.classList.remove("d-none");
  } else {
    resultTable.innerHTML = `<tr><td>No Record Available</td></tr>`;
    // sectionBtnClearLB.classList.add("d-none");
  }
  sectionGameResult.classList.remove("d-none");
}

// This function will check is player record is available in local storage
function isScoreAvailable() {
  let scoreAvailable = false;
  sectionBtnClearLB.classList.add("d-none");
  Object.entries(localStorage).forEach((el) => {
    if (el[1].split("score-").length == 2) {
      sectionBtnClearLB.classList.remove("d-none");
      scoreAvailable = true;
    }
  });
  return scoreAvailable;
}

// FUNCTION: getSortedScores() will sort the scores present in localStorage and return sorted object
function getSortedScores() {
  return Object.entries(localStorage)
    .filter((el) => {
      return el[1].split("score-").length == 2;
    })
    .sort();
}

//Start game
btnStart.addEventListener("click", () => {
  // Checking if player name is filled?
  if (isValidUserName(inputUserName.value)) {
    sectionInput.classList.add("d-none");
    movesCount = 0;
    playerName = inputUserName.value;
    seconds = 0;
    minutes = 0;
    //controls and buttons visibility
    sectionGame.classList.remove("d-none");
    btnStop.classList.remove("hide");
    btnStart.classList.add("hide");
    //Start timer
    interval = setInterval(timeGenerator, 1000);
    //initial moves
    moves.innerHTML = `${movesCount}`;
    highScore.innerHTML = `${getHighScore().bestScorerTiming} (${
      getHighScore().bestScorerName
    })`;
    initializer();
    errorMsg.innerText = "";
    // Scroll to game section
    sectionGame.scrollIntoView({ behavior: "smooth" });
  } else {
    errorMsg.innerText = "Not a valid name";
  }
  inputUserName.value = "";
  sectionGameResult.classList.add("d-none");
});

// FUNCTION: isValidUserName() will take username as input and validate the username. If username is valid, it will return true, else it will return false.
function isValidUserName() {
  let valid = true;
  // If username is blank
  if (username.trim() == "") valid = false;
  // Name should only contain 'a to z', 'A to Z', ' ' and '_'
  username.split("").forEach((ch) => {
    if (
      !(
        (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) ||
        (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) ||
        ch.charCodeAt() == 95 ||
        ch.charCodeAt() == 32
      )
    )
      valid = false;
  });
  return valid;
}

//FUNCTION: timeGenerator() will be called on each 1000ms to display the running time.
function timeGenerator() {
  seconds += 1;
  //minutes logic
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format time before displaying
  secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `${minutesValue}:${secondsValue}`;
}

// FUNCTION: getHighScore() will get the best scorer and return the player name and player timing in the form of object
function getHighScore() {
  let bestScorerName;
  let bestScorerTiming;
  if (isScoreAvailable()) {
    const bestScorer = getSortedScores()[0];
    bestScorerTiming = bestScorer[0];
    bestScorerName = bestScorer[1];
    bestScorerName = bestScorerName.split("-")[1];
  } else {
    bestScorerName = "NA";
    bestScorerTiming = "NA";
  }
  return { bestScorerName, bestScorerTiming };
}

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;

//For calculating moves
function movesCounter() {
  movesCount += 1;
  moves.innerHTML = `${movesCount}`;
}

//Initialize values and func calls
function initializer() {
  // result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);
}

//Pick random objects from the items array
function generateRandom(size = 4) {
  //temporary array
  let tempArray = [...items];
  //initializes cardValues array
  let cardValues = [];
  //size should be double (4*4 matrix)/2 since pairs of objects would exist
  size = (size * size) / 2;
  //Random object selection
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    //once selected remove the object from temp array so that it will not come again
    tempArray.splice(randomIndex, 1);
  }

  return cardValues;
}

function matrixGenerator(cardValues, size = 4) {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];

  //simple shuffle
  cardValues = shuffleArray(cardValues);

  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
     <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
          <img src="assets/img/card.png" class="image"/>
        </div>
        <div class="card-after">
          <img src="${cardValues[i].image}" class="image"/>
        </div>
     </div>
     `;
  }

  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      if (firstCard == this) return;

      //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored)
      if (!card.classList.contains("matched")) {
        //flip the cliked card
        card.classList.add("flipped");
        //if it is the firstcard (!firstCard since firstCard is initially false)

        if (!firstCard) {
          //so current card will become firstCard
          firstCard = card;

          //current cards value becomes firstCardValue
          firstCardValue = card.getAttribute("data-card-value");
        } else {
          //secondCard and value
          secondCard = card;
          let secondCardValue = card.getAttribute("data-card-value");
          if (firstCardValue == secondCardValue) {
            //if both cards match add matched class so these cards would beignored next time
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            //set firstCard to false since next card would be first now
            firstCard = false;
            //winCount increment as user found a correct match
            winCount += 1;
            //check if winCount ==half of cardValues
            if (winCount == Math.floor(cardValues.length / 2)) {
              // Saving player score
              localStorage.setItem(
                minutesValue + ":" + secondsValue,
                "score-" + playerName
              );
              setTimeout(() => {
                stopGame();
                displayResult();
                btnShowLeaderboard.innerText = "Hide Leaderboard";
                toggleBtnLeaderboard = !toggleBtnLeaderboard;
              }, 1000);
            }
          } else {
            //if the cards dont match, flip the cards back to normal
            setTimeout(() => {
              firstCard.classList.remove("flipped");
              secondCard.classList.remove("flipped");
              firstCard = false;
              secondCard = false;
            }, 900);
          }
        }
        movesCounter();
      }
    });
  });
}

// FUNCTION: shuffleArray() will take an array and return shuffled array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// FUNCTION stopGame() will clear the timer, and bring back the game in initial mode
function stopGame() {
  sectionInput.classList.remove("d-none");
  sectionGame.classList.add("d-none");
  btnStart.innerText = "Start Game";
  btnStop.classList.add("hide");
  btnStart.classList.remove("hide");
  clearInterval(interval);
}
//Stop game
btnStop.addEventListener("click", stopGame);

// Clearing the scores from the leaderboard
btnClearLB.addEventListener("click", function () {
  if (this.innerText == "Confirm") {
    const password = inputPassword.value;
    clearLeaderBoard(password);
  }
  sectionClearLBInput.classList.remove("d-none");
  this.innerText = "Confirm";
  document.querySelector(".btnClearLB").scrollIntoView({ behavior: "smooth" });
  inputPassword.focus();
});
function clearLeaderBoard(password) {
  if (isCorrectPassword(password)) {
    // Remove entries from local storage
    localStorage.clear();
    // Hide the delete option
    sectionClearLB.classList.add("d-none");
    displayResult();
  } else {
    errorMsgPassword.classList.remove("d-none");
  }
  inputPassword.addEventListener("input", function () {
    errorMsgPassword.classList.add("d-none");
  });
}

function isCorrectPassword(password) {
  return password == "etg" ? true : false;
}

// Share page with friends
btnShare.addEventListener("click", function () {
  if (!navigator.share) {
    alert("Your browser don't have option to share.");
    return;
  }
  navigator
    .share({
      text: "Please look at *Memory Card Game* developed by Nishant Kumar (ETG Digital)",
      url: "https://nishantkcr7.github.io/etg/Mini-Projects/Memory/",
    })
    .then(() => {
      console.log(`Thanks for sharing`);
    })
    .catch((err) => {
      console.log(err);
    });
});

arr = [1, 2, 3, 4, 5];

console.log(...arr);
