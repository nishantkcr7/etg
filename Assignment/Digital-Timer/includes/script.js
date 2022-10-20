$(".btn-hi").click(function (e) {
  console.log(`Hi clicked`);
});
$(".btn-hi").click(function () {
  $(this).off();
});

$(".btn-disable").click(() => {
  disableClick($(".btn-hi"));
});
$(".btn-enable").click(() => {
  enableClick($(".btn-hi"));
});
/*
==========================================================================
Rough
==========================================================================
*/
// Function to disable the click event
const disableClick = (el) => {
  // el: It takes element as an argument
  el.off();
  console.log(el);
  console.log(`Disabled...`);
};
// Function to disable the click event
const enableClick = (el) => {
  // el: It takes element as an argument
  console.log(el);
  console.log(`Enabled...`);
};
$("main").hide().fadeIn(1500);
$(".alert-msg").hide();
let currentDate = new Date();
let isTimerRunning = false;
let x,
  timerPausedAt = 0;
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

// Changing the timer display value on input of duration
$(".timer-input--min").bind("input", function () {
  $(".d-min").text("00");
  if ($(this).val() > 0 && $(this).val() <= 60) $(".d-min").text($(this).val());
  else
    $(".alert-msg")
      .text("Duration can't be more than 1 hour 💀")
      .fadeIn()
      .fadeOut(1500);
});

// Starting the timer on the click of Start Timer Button
$(".timer-button--start").click(function () {
  // If timer is already running so no need to take the input again
  if (!isTimerRunning) {
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
      start_timer();
      // startTimer(inputTimerDuration);
    }
    // Clearing the input value of input duration
    $(".timer-input--min").val("");
  } else {
    start_timer();
  }
});

// Reseting the timer on the click of Stop Timer Button
$(".timer-button--stop").click(function () {
  // stopTimer("stop");
  reset_timer();
  isTimerRunning = !isTimerRunning;
});

// Pausing the timer on the click of Pause Timer Button
$(".timer-button--pause").click(function () {
  // stopTimer("pause");
  isTimerRunning = !isTimerRunning;
  stop_timer();
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
// Changing timer duration display on click of Button 'SET'
$(".btn-set--duration").click(function () {
  if ($(".timer-input--min").val() > 0 || $(".timer-input--min").val() != "") {
    $(".d-min").text($(".timer-input--min").val());
  }
});

// Timer Function Starts
function start_timer() {
  isTimerRunning = true;
  var hour = $(".d-hour");
  var mins = $(".d-min");
  var secs = $(".d-sec");
  console.log(`start_timer()
  ${hour.text()}:${mins.text()}:${secs.text()}
  `);

  hour.text(hour.text());
  mins.text(mins.text());
  secs.text(secs.text());
  resume_timer();
}

function resume_timer() {
  var time = $(".time").text();
  interval = setInterval(function () {
    let hour = $(".d-hour").text();
    let min = $(".d-min").text();
    let sec = $(".d-sec").text();
    var counter = $(".timer").find("span");
    counter.eq(0).text(hour);
    counter.eq(1).text(min);
    counter.eq(2).text(sec);
    if (hour == 0 && min == 0) {
      $(".timer").css("color", "red");
    }
    if (sec == 0) {
      if (min != 0) {
        $(".d-min").text(min--);
        sec = 59;
      } else if (min == 0 && hour != 0) {
        $(".d-hour").text(hour--);
        $(".d-min").text(min--);
        sec = 59;
      } else if (hour == 0 && min == 0 && sec == 0) {
        counter.eq(2).text(0);
        $(".d-sec").text("0");
      }
      if (hour == 0 && min == 0) {
        $(".timer").css("color", "red");
      }
    }
    $(".d-hour").text(hour);
    $(".d-min").text(min);
    $(".d-sec").text(--sec);
    if (hour == 0 && min == 0 && sec == 0) {
      clearInterval(interval);
      alert("Time Up");
    }
  }, 1000);
}

function stop_timer() {
  clearInterval(interval);
  console.log(`Stop timer called, clearInter() up. isTimerRunning=true down`);

  isTimerRunning = true;
}

function reset_timer() {
  clearInterval(interval);
  $(".d-hour").text("00");
  $(".d-min").text("00");
  $(".d-sec").text("00");
  $(".timer").css("color", "black");
}
// Timer Function Ends
