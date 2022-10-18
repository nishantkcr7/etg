let currentDate = new Date();
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

// Timer function
const startTimer = (min) => {
  let deadline = new Date(new Date().getTime() + min * 60100).getTime();

  let x = setInterval(function () {
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
      clearInterval(x);
      $(".d-min").text("00");
      $(".d-sec").text("00");
    }
  }, 1000);
};
startTimer(2);

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
