import {
  upgradeYear,
  isLastMonth,
  upgradeMonth,
  isFirstMonth,
  downgradeYear,
  downgradeMonth,
} from "./functions.js";
const btnArrowUp = document.querySelector(".arrow-up");
const btnArrowDown = document.querySelector(".arrow-down");
const year = document.querySelector(".year");
const month = document.querySelector(".month");

// On click of Arrow Up changing the year
btnArrowUp.addEventListener("click", () => {
  //   check if its a last month
  if (isLastMonth(month.innerText)) {
    // Upgrade year
    upgradeYear(year.innerText);
  }
  // upgrade month
  upgradeMonth(month.innerText);
});

// On click of Arrow Down button downgrade the year and month
btnArrowDown.addEventListener("click", function () {
  // check if it is a first month
  if (isFirstMonth(month.innerText)) {
    // Downgrade Month
    downgradeYear(year.innerText);
  }
  // downgrade month
  downgradeMonth(month.innerText);
});
