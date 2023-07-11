const day = document.querySelector(".calDay");
const week = document.querySelector(".calWeek");
const month = document.querySelector(".calMonth");
const year = document.querySelector(".calYear");

const today = new Date();

day.innerHTML = today.getDate();
week.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const allMonths = [
  'January',
  'February',
  'March',
  'May',
  'April',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'Decemeber'
];