const stories = {
  1: "Once upon a time, the Bodhisattva was born as a scholar and mastered all the scriptures. He became an ascetic and had a number of disciples. One day, while the Bodhisattva was walking through the forest with his disciple Ajita, he saw a hungry tigress about to eat her own cubs. Deeply moved, the Bodhisattva decided to offer himself as food for the tigress. He feared that his disciple would stop him from sacrificing his life and so the Bodhisattva sent Ajita away on an errand and placed himself in front of the tigress. “Grr…” growled the tigress and ripped the Bodhisattva apart. She and her cubs fed on him ravenously.When Ajita returned and saw his master’s blood-stained clothes, he shouted out in terror, “God Lord! These are the Master’s clothes. That means these creatures must have fed on him!” With a heavy heart Ajita returned to narrate how his master had sacrificed his own life out of charity and compassion.",
  2: "Once, the Bodhisattva was born as an ascetic. He had five hundred followers, who lived with him in his mountain abode.  Once day, half of his followers, including their chief had gone away looking for food. Suddenly, the Bodhisattva fell sick and took to bed. The followers who had remained with him at the abode reached his bedside to tent to him. ey asked him what his life’s achievement was. The Bodhisattva plied, “Nothing.” The followers failed to understand the true aning of the wise man’s words. They considered him to be a failure because he had achieved nothing. Soon after, the Bodhisattva died. The foolish followers gave him a simple burial, without y ceremony. When the chief of the other half of the followers turned, he explained to the others that their master had hieved such divinity that he could see beyond the dinary appearance of things. But they did not understand him ther. One night, the Bodhisattva appeared before his followers and id, “The one who hears the Truth and understands it mediately is far better off than a hundred fools who spend a hundred ars thinking.” The followers then realized that one should sten when the wise speak.",
  3: "Welcome to the world of fairy tales. Here you will find the best selection of fairy tales list, that will enchant the young minds  with positivity of the most popular fairy tales. These fables and fairy tale characters have been collected from different cultures, and you will always find something new for the kids,including the ubiquitous king, prince and princess fairy tales. So, just scroll down and enjoy these English fairy tales. Happy Reading!",
  4: "An example of mystic India, Panchatantra tales are the oldest  surviving stories of mankind, surviving for centuries, from  mouth to mouth, before they were documented. You will love the  lucid pace of the stories, and they always make for great  bedtime or story telling sessions. Share them will all story  lovers, and let them enjoy the light, enchanting life of the  stories. These Indian panchatantra stories are translated into  simple English, and thus they serve as great material for short  Indian stories for children. Ancient fables, still relevant for  today's hi tech lifestyle They are actually documented versions  of oral stories that ran across generations before. Even today,  they are favored stories across India and other parts of the  world. We are proud to bring you a collection of the most  popular Panchatantra stories to you, for they are loved by  adults and kids alike. They give the kids an early footing onto  moral and social values, shaping the young minds into an ethical  future. Read these stories to your kids and learn something new  from every Panchatantra story! Most of the stories come with  videos after the text, to provide you with an all round  experience. Enjoy them, with your kids, and share them with everyone, and help build a more beautiful world.",
};
let activePara, inputParaVal;
let inputParaArr;
let activeParaArr;
let isTimerRunning = false;
let wordFromStory;
let paraIterator = 0;
let i = 0;
const btnReset = document.getElementById("btn-reset");
const selectDuration = document.getElementById("select-duration");
const btnNext = document.getElementById("btn-next");

const inputPara = document.getElementById("input-para");
const remainingTime = document.getElementById("remaining-time");
const selectStory = document.getElementById("select-story");
const textareaStory = document.getElementById("textarea-story");
Object.keys(stories).map((el) => {
  selectStory.insertAdjacentHTML(
    "beforeend",
    `<option value='story-${el}' >${stories[el]}</option>`
  );
});

const getStory = (t) => {
  const storyNumber = t.value.slice(-1);
  textareaStory.value = activePara = stories[storyNumber];
};

// Working with DATE & TIME

const startTimer = (min) => {
  var deadline = new Date(new Date().getTime() + min * 60000).getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById(
      "remaining-time"
    ).innerText = `${minutes}m ${seconds}s
    `;
    if (t < 0) {
      clearInterval(x);
      document.getElementById("remaining-time").innerText = "00m 00s";
    }
  }, 1000);
};
let timerVal;
const setTimer = (t) => {
  remainingTime.innerHTML = `${t.value.slice(-1)}m 0s`;
  timerVal = t.value.slice(-1);
};
inputPara.addEventListener("input", (e) => {
  console.log("I:=> ", i++, "\nChar:=>", e.target.value);

  if (selectStory.value === "") {
    selectStory.focus();
    inputPara.value = "";
  } else if (selectDuration.value === "min-0") {
    selectDuration.focus();
    inputPara.value = "";
  } else {
    if (!isTimerRunning) {
      startTimer(timerVal);
      isTimerRunning = !isTimerRunning;
    }
    selectDuration.setAttribute("disabled", "");
    selectStory.setAttribute("disabled", "");
    // Spliting the story into the array
    activeParaArr = activePara.split(" ");
    console.log(typeof e.target.value);
    console.log("e.target.value.slice(-1): " + e.target.value.slice(-1));

    if (e.target.value.slice(-1) === " ") {
      console.error("spaceClicked");
      paraIterator++;
    }

    // Adding the first word of the story in the variable wordFromStory
    wordFromStory = activeParaArr[paraIterator];

    console.log(
      "ACTIVE PARA ARR: \n",

      "\nWORD FROM STORY: ",
      wordFromStory,
      "\nPARA ITERATOR: ",
      paraIterator
    );
    // checkWord(inputParaArr[paraIterator], activeParaArr[paraIterator]);
  }
});
btnReset.addEventListener("click", () => {
  window.location.reload();
});
btnNext.addEventListener("click", () => {
  window.location.reload();
});
