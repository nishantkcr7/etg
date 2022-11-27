const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const highScore = document.getElementById("highScore");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const errorMsg = document.querySelector(".error-msg");
const sectionGame = document.querySelector(".section-game");
const sectionInput = document.querySelector(".section-input");
const resultTable = document.querySelector(".resultTable");
const gameContainer = document.querySelector(".game-container");
const inputUserName = document.getElementById("username");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
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

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial moves and win count
let movesCount = 0,
  winCount = 0;

//For timer
const timeGenerator = () => {
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
};

//For calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `${movesCount}`;
};

//Pick random objects from the items array
const generateRandom = (size = 4) => {
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
    //once selected remove the object from temp array
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  cardValues = [...cardValues, ...cardValues];
  //simple shuffle
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    /*
        Create Cards
        before => front side (contains question mark)
        after => back side (contains actual image);
        data-card-values is a custom attribute which stores the names of the cards to match later
      */
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

  //Grid lora
  // gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;
  // gameContainer.style.alignContent = `center`;
  // let query = window.matchMedia("(max-width: 600px)");
  // if (query.matches) {
  //   gameContainer.style.gridTemplateColumns = `repeat(${size / 2}, auto)`;
  //   gameContainer.style.alignContent = `center`;
  // }

  //Cards
  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
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
          //increment moves since user selected second card
          movesCounter();
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
                playerName
              );
              result.innerHTML = `<h2>You Won</h2>
            <h4>Moves: ${movesCount}</h4>`;
              // Change button name from 'Start game' to 'Play Again'
              startButton.innerText = "Play Again";
              stopGame();
            }
          } else {
            //if the cards dont match
            //flip the cards back to normal
            let [tempFirst, tempSecond] = [firstCard, secondCard];
            firstCard = false;
            secondCard = false;
            let delay = setTimeout(() => {
              tempFirst.classList.remove("flipped");
              tempSecond.classList.remove("flipped");
            }, 900);
          }
        }
      }
    });
  });
};

//Start game
startButton.addEventListener("click", () => {
  // Checking if player name is filled?
  if (inputUserName.value.trim() != "") {
    sectionInput.classList.add("d-none");
    movesCount = 0;
    playerName = inputUserName.value;
    seconds = 0;
    minutes = 0;
    //controls and buttons visibility
    sectionGame.classList.remove("d-none");
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    //Start timer
    interval = setInterval(timeGenerator, 1000);
    //initial moves
    moves.innerHTML = `${movesCount}`;
    highScore.innerHTML = `${getHighScore().bestScore} (${
      getHighScore().bestPlayer
    })`;
    initializer();
    errorMsg.innerText = "";
    // Scroll to game section
    sectionGame.scrollIntoView({ behavior: "smooth" });
  } else {
    errorMsg.innerText = "Please enter your name";
  }
  inputUserName.value = "";
});

//Stop game
stopButton.addEventListener(
  "click",
  (stopGame = () => {
    // Setting 'Start Game' button name to 'Play Game'
    sectionInput.classList.remove("d-none");
    sectionGame.classList.add("d-none");
    startButton.innerText = "Start Game";
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
  })
);

//Initialize values and func calls
const initializer = () => {
  result.innerText = "";
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);
};
function getHighScore() {
  let bestScore = "99:99";
  let bestPlayer = "";
  for (const [playerName, playerScore] of Object.entries(localStorage)) {
    if (playerScore < bestScore) {
      bestScore = playerScore;
      bestPlayer = playerName;
    }
  }
  return { bestPlayer, bestScore };
}

function displayResult() {
  let minScore = "";
  // console.log(localStorage);
  let sortedLeaderBoard = {};
  // console.log(Object.entries(localStorage));
  for ([playerName, playerScore] of Object.entries(localStorage)) {
    // console.log(playerName, playerScore);
  }
}
displayResult();

newObj = {};
Object.entries(localStorage).forEach((e) => {
  newObj[e[1]] = e[0];
});

console.log(newObj);
Object.entries(newObj).forEach((el, i) => {
  console.log(el);
  resultTable.insertAdjacentHTML(
    "beforebegin",
    `
<tr>
  <td>#${i + 1}</td>
  <td>${el[1]}</td>
  <td>${el[0]}</td>
</tr>
  `
  );
});
