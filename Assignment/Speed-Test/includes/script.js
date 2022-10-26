// Object Containing Different Stories
const stories = {
  1: "Once upon a time, the Bodhisattva was born as a scholar and mastered all the scriptures. He became an ascetic and had a number of disciples. One day, while the Bodhisattva was walking through the forest with his disciple Ajita, he saw a hungry tigress about to eat her own cubs. Deeply moved, the Bodhisattva decided to offer himself as food for the tigress. He feared that his disciple would stop him from sacrificing his life and so the Bodhisattva sent Ajita away on an errand and placed himself in front of the tigress. “Grr…” growled the tigress and ripped the Bodhisattva apart. She and her cubs fed on him ravenously.When Ajita returned and saw his master’s blood-stained clothes, he shouted out in terror, “God Lord! These are the Master’s clothes. That means these creatures must have fed on him!” With a heavy heart Ajita returned to narrate how his master had sacrificed his own life out of charity and compassion.",
  2: "Once, the Bodhisattva was born as an ascetic. He had five hundred followers, who lived with him in his mountain abode.  Once day, half of his followers, including their chief had gone away looking for food. Suddenly, the Bodhisattva fell sick and took to bed. The followers who had remained with him at the abode reached his bedside to tent to him. ey asked him what his life’s achievement was. The Bodhisattva plied, “Nothing.” The followers failed to understand the true aning of the wise man’s words. They considered him to be a failure because he had achieved nothing. Soon after, the Bodhisattva died. The foolish followers gave him a simple burial, without y ceremony. When the chief of the other half of the followers turned, he explained to the others that their master had hieved such divinity that he could see beyond the dinary appearance of things. But they did not understand him ther. One night, the Bodhisattva appeared before his followers and id, “The one who hears the Truth and understands it mediately is far better off than a hundred fools who spend a hundred ars thinking.” The followers then realized that one should sten when the wise speak.",
  3: "Welcome to the world of fairy tales. Here you will find the best selection of fairy tales list, that will enchant the young minds  with positivity of the most popular fairy tales. These fables and fairy tale characters have been collected from different cultures, and you will always find something new for the kids,including the ubiquitous king, prince and princess fairy tales. So, just scroll down and enjoy these English fairy tales. Happy Reading!",
  4: "An example of mystic India, Panchatantra tales are the oldest  surviving stories of mankind, surviving for centuries, from  mouth to mouth, before they were documented. You will love the  lucid pace of the stories, and they always make for great  bedtime or story telling sessions. Share them will all story  lovers, and let them enjoy the light, enchanting life of the  stories. These Indian panchatantra stories are translated into  simple English, and thus they serve as great material for short  Indian stories for children. Ancient fables, still relevant for  today's hi tech lifestyle They are actually documented versions  of oral stories that ran across generations before. Even today,  they are favored stories across India and other parts of the  world. We are proud to bring you a collection of the most  popular Panchatantra stories to you, for they are loved by  adults and kids alike. They give the kids an early footing onto  moral and social values, shaping the young minds into an ethical  future. Read these stories to your kids and learn something new  from every Panchatantra story! Most of the stories come with  videos after the text, to provide you with an all round  experience. Enjoy them, with your kids, and share them with everyone, and help build a more beautiful world.",
};
let isTimerRunning = false;
let arrayStory,
  count = 0,
  countIncorrect,
  x;

// Functions
const countTotalWords = () => {
  words = 0;
  arrayStory.forEach((ch) => {
    if (ch.innerText === " ") {
      words++;
    }
  });
  return words;
};

// jQuery Starts
$(document).ready(() => {
  // Focusing on 'Select Your Story' dropdown
  $("#select-story").focus();
  // Desabling the Duration dropdown
  $("#select-duration").attr("disabled", true);
  // Adding stories to dropdown-'Select your story'
  Object.entries(stories).map((story, i) => {
    // Getting all stories and appending in the dropdown with width/20 characters
    $("#select-story").append(
      `<option value="story-${i + 1}">${story[1].slice(
        0,
        $(this).width() / 20
      )}...</option>`
    );
  });
  // Getting selected Story from the dropdown
  $("#select-story").change(function () {
    countIncorrect = 0;
    // Getting Story number in a letiable
    const selectedStoryNumber = $(this)
      .find(":selected")
      .attr("value")
      .slice(-1);
    if (selectedStoryNumber !== "n") {
      // 1. Adding the selected story in the 'Dispalay Story' section
      const selectedStory = stories[selectedStoryNumber];
      $(".d-para").text("");
      // Adding each characters from the story inside <span> tag and appending to the display section
      selectedStory.split("").forEach((ch) => {
        const chSpan = document.createElement("span");
        $(chSpan).text(ch);
        $(".d-para").append(chSpan);
      });
      // 2. Enabling the 'Select Time Duration' dropdown from disabled.
      $("#select-duration").attr("disabled", false).focus();

      // 3. Getting the story inside an array for the comparision
      getStoryInArray();
    }
  });
  const getStoryInArray = () => {
    arrayStory = document.querySelectorAll(".d-para span");
  };
  // Start Typing

  $("#input-para").bind({
    click: function () {
      // Checking if the story is selected, if not selected focus will transfered to 'Select Your Story' dropdown
      if ($("#select-story").find(":selected").attr("value") === "story-n")
        $("#select-story").focus();
      // Checking if the time duration is selected, if not selected focus will transfered to 'Select Test Duration' dropdown
      if ($("#select-duration").find(":selected").attr("value") === "min-0") {
        $("#select-duration").focus();
      }
      countIncorrectWords();
    },
    input: function () {
      $("#select-story").attr("disabled", true);
      $("#select-duration").attr("disabled", true);
      console.log($("#select-duration").find(":selected").attr("value"));

      const timerDuration = $("#remaining-time").text().slice(0, 1);
      // Starting the timer
      if (!isTimerRunning) {
        startTimer(timerDuration);
        isTimerRunning = !isTimerRunning;
      }
      const arrayInput = $("#input-para").val().split("");
      arrayStory.forEach((el, i) => {
        character = el.innerText;
        // console.log(`${character} === ${arrayInput[i]}`);

        if (arrayInput[i] == undefined) {
          el.classList.remove("correct");
          el.classList.remove("incorrect");
        } else if (character === arrayInput[i]) {
          el.classList.add("correct");
          el.classList.remove("incorrect");
        } else {
          el.classList.add("incorrect");
          countIncorrect++;
        }
      });
    },
  });

  $("#select-duration").change(function () {
    // If duration is selected then the focus will move to 'Input' box and total duration will be added to the timer
    if ($("#select-duration").find(":selected").attr("value") !== "min-0") {
      $("#input-para").focus();
      // Getting selected time from 'Select Test Duration' dropdown
      const timeDuration = $("#select-duration")
        .find(":selected")
        .attr("value")
        .slice(-1);
      // Adding selected duration to the timer
      $("#remaining-time").text(`${timeDuration}m 0s`);
    } else {
      $("#remaining-time").text(`0m 0s`);
    }
  });
});
const startTimer = (min) => {
  let deadline = new Date(new Date().getTime() + min * 60000).getTime();

  x = setInterval(function () {
    let now = new Date().getTime();
    let t = deadline - now;
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    $("#remaining-time").text(`${minutes}m ${seconds}s`);
    if (t < 0) {
      testStopped();
    }
  }, 1000);
};
const countIncorrectWords = () => {
  return $(".d-para span.incorrect").length;
};
// Reset button
$("#btn-reset").click(function () {
  $("#select-story").attr("disabled", false);
  // Selecting the default option of 'Select Your Story' dropdown
  $("#select-story").val("story-n").attr("selected", true);
  // Selecting the default option of 'Select Test duration' dropdown
  $("#select-duration")
    .val("min-0")
    .attr("selected", true)
    .attr("disabled", true);
  // Changing the time 0m 0s
  $("#remaining-time").text("0m 0s");
  // Removing the texts from the display story and adding default texts
  $(".d-para").empty().text("Select the story to begin the test...");
  // Clearing the inputed values in the input box
  $("#input-para").val("");
  isTimerRunning = false;
  // Clearing resutls
  $(".val-speed").text("0");
  $(".val-accuracy").text("0");
  $(".val-score").text("0");
});
// Stop Test Button
$("#btn-stop").click(function () {
  if (isTimerRunning) testStopped();
});
const testStopped = () => {
  clearInterval(x);
  $("#remaining-time").text(`0m 0s`);
  // Disabling the inputbox
  $("#input-para").attr("readonly", true);
  // Checking total word typed
  const wpm =
    $("#input-para").val().split(" ").length /
    $("#select-duration").find(":selected").attr("value").slice(-1);
  $("#input-para").val().split(" ").length /
    $(".val-speed").text(wpm).css({
      fontWeight: "bolder",
    });
  // Calculating Accuracy: percentage of total character - correct characters
  const countTotalCharTyped = $("#input-para").val().split("").length;
  const percentageIncorrect =
    100 - Math.round((countIncorrectWords() / countTotalCharTyped) * 100);
  $(".val-accuracy").text(percentageIncorrect).css({ fontWeight: "bolder" });
  // Calculating Average Word Per Min: (Total character typed - Total incorrect character) / speed
  const awpm =
    wpm - Math.round((countIncorrectWords() / countTotalCharTyped) * 100) / 100;

  $(".val-score").text(awpm);
  isTimerRunning = false;
};
