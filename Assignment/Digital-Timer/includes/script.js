$("main").hide().fadeIn(1500);
$(".alert-msg").hide();
let currentDate = new Date();
let isTimerRunning = false;
let x;
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
function stopTimer(action) {
  clearInterval(x);
  if (action === "stop") {
    $(".d-min").text("00");
    $(".d-sec").text("00");
  }
}

// Timer function
const startTimer = (min) => {
  if (!isTimerRunning) {
    isTimerRunning = !isTimerRunning;
    let deadline = new Date(new Date().getTime() + min * 60000).getTime();

    x = setInterval(function () {
      let now = new Date().getTime();
      let t = deadline - now;
      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((t % (1000 * 60)) / 1000);
      if (minutes < 10) {
        minutes = "0" + minutes;
        $(".d-min").text(minutes);
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
        $(".d-min").text(seconds);
      }
      $(".d-min").text(minutes);
      $(".d-sec").text(seconds);
      //   document.getElementById("remaining-time").innerText = `${minutes}m ${seconds}s
      if (t <= 1) {
        stopTimer("stop");
      }
    }, 1000);
  }
};

var span = document.getElementById("newdate");

function getCurrentDateTime() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent =
    ("0" + h).substr(-2) +
    ":" +
    ("0" + m).substr(-2) +
    ":" +
    ("0" + s).substr(-2);
}

setInterval(getCurrentDateTime, 1000);

// Funtion to set current date and time
function getCurrentDateTime() {
  currentDate = new Date();
  const currentDateTime =
    weekDays[currentDate.getDay()] +
    ", " +
    currentDate.getDate() +
    " " +
    months[currentDate.getMonth()] +
    ", " +
    ("0" + currentDate.getHours()).substr(-2) +
    ":" +
    ("0" + currentDate.getMinutes()).substr(-2);
  $(".d-today").text(currentDateTime);
}

// Starting the timer on the click of Start Timer Button
$(".timer-button--start").click(function () {
  // Getting the value of Timer Duration in minute
  const inputTimerDuration = $(".timer-input--min").val();
  if (inputTimerDuration == "") {
    $(".alert-msg").text("🚫Please input duration💀").fadeIn().fadeOut(500);
    $(".timer-input--min").focus();
  } else if (inputTimerDuration < 1) {
    $(".alert-msg")
      .text("🚫Please input positive number💀")
      .fadeIn()
      .fadeOut(500);
    $(".timer-input--min").val("");
    $(".timer-input--min").focus();
  } else {
    console.log(inputTimerDuration);
    startTimer(inputTimerDuration);
  }
  // Clearing the input value of input duration
  $(".timer-input--min").val("");
});

// Reseting the timer on the click of Stop Timer Button
$(".timer-button--stop").click(function () {
  stopTimer("stop");
  isTimerRunning = !isTimerRunning;
});

// Pausing the timer on the click of Pause Timer Button
$(".timer-button--pause").click(function () {
  stopTimer("pause");
  isTimerRunning = !isTimerRunning;
});

// Decrementing the input value on click of 'Timer - ' button
$(".timer-button--minus").bind("click", function () {
  if ($(".timer-input--min").val() > 0)
    $(".timer-input--min").val($(".timer-input--min").val() - 1);
});

// Incrementing the input value on click of 'Timer - ' button
$(".timer-button--plus").bind("click", function () {
  $(".timer-input--min").val(Number($(".timer-input--min").val()) + 1);
});
