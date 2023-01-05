import Months from "./months.js";
const year = document.querySelector(".year");
const month = document.querySelector(".month");
function upgradeYear(currentYear) {
  year.innerText = Number(currentYear) + 1;
}

function isLastMonth(monthName) {
  return getMonthNumber(monthName) == 12 ? true : false;
}

function upgradeMonth(monthName) {
  // Get current month number
  const monthNumber = getMonthNumber(monthName);

  //   Getting upgraded month
  const upgradedMonth = getUpgradedMonth(monthNumber);

  // Display Month
  month.innerText = upgradedMonth;
}

function getMonthNumber(month) {
  const monthArr = Months.filter((m) => {
    return m.name == month;
  });
  return monthArr[0].number;
}

function getUpgradedMonth(monthNumber) {
  if (monthNumber == 12) {
    return "January";
  }
  const monthArr = Months.filter((month) => {
    return month.number == monthNumber + 1;
  });
  return monthArr[0].name;
}
function isFirstMonth(monthName) {
  return getMonthNumber(monthName) == 1 ? true : false;
}

function downgradeYear(yearName) {
  year.innerText = Number(yearName) - 1;
}

function downgradeMonth(monthName) {
  // Get month name
  const monthNumber = getMonthNumber(monthName);
  // Get downgraded month name
  const downgradedMonth = getDowngradedMonth(monthNumber);
  month.innerText = downgradedMonth;
}
function getDowngradedMonth(monthNumber) {
  if (monthNumber == 1) {
    return "December";
  }
  const month = Months.filter((month) => {
    return month.number == monthNumber - 1;
  });
  return month[0].name;
}
export {
  upgradeYear,
  isLastMonth,
  upgradeMonth,
  isFirstMonth,
  downgradeYear,
  downgradeMonth,
};
