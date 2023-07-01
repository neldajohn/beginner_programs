/* get the time element */
const myHour = document.getElementById("hour");
const myMinute = document.getElementById("minutes");
const mySecond = document.getElementById("seconds");
const myAmPm = document.getElementById("ampm");

/* get the date details */
const myDate = document.getElementById("date");
const myMonth = document.getElementById("month");
const myDay = document.getElementById("day");
const myYear = document.getElementById("year");

/* button details */
const formatButton = document.getElementById("format-btn");
let is12hr = true;

formatButton.addEventListener("click", function () {
  // Toggle the time format logic here
  is12hr = !is12hr; // Toggle the format

  // Update the display based on the new format
  myClock(); // Call the clock function to update the time format
});

function myClock() {
  let hourEl = new Date().getHours();
  let minuteEl = new Date().getMinutes();
  let secondEl = new Date().getSeconds();
  let ampmEl = hourEl < 12 ? "AM" : "PM";

  let dateEl = new Date().getDate();
  let monthEl = new Date().getMonth();
  let dayEl = new Date().getDay();
  let yearEl = new Date().getFullYear();

  if (!is12hr) {
    // Switch to 24-hour format
    hourEl = hourEl < 10 ? "0" + hourEl : hourEl;
    myAmPm.innerText = "HRS"; // Remove AM/PM for 24-hour format
  } else {
    // Switch to 12-hour format
    hourEl = hourEl % 12 || 12; // Convert hour to 12-hour format
    hourEl = hourEl < 10 ? "0" + hourEl : hourEl;
    myAmPm.innerText = ampmEl;
  }

  minuteEl = minuteEl < 10 ? "0" + minuteEl : minuteEl;
  secondEl = secondEl < 10 ? "0" + secondEl : secondEl;
  dateEl = dateEl < 10 ? "0" + dateEl : dateEl;

  let months = [
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
    "December"
  ];
  monthEl = months[monthEl] + ",";

  let daysOfWeek = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday"
  ];
  dayEl = daysOfWeek[dayEl];

  myHour.innerText = hourEl;
  myMinute.innerText = minuteEl;
  mySecond.innerText = secondEl;

  myDay.innerText = dayEl;
  myDate.innerText = dateEl;
  myMonth.innerText = monthEl;
  myYear.innerText = yearEl;

  setTimeout(() => {
    myClock();
  }, 1000);
}

myClock();
