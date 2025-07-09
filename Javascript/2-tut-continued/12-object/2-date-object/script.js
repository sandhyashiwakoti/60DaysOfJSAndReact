const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturtday",
];

console.log("Today's Day");
const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

console.log("Manual Day Input");
const date1 = new Date("1/12/2004");
const sentence = `${days[day]}, ${date1.getDate()} ${
  months[month]
} ${date1.getFullYear()}`;

document.body.innerHTML = sentence;
