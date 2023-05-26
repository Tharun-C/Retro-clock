// ================ CLOCK ===============
const hour = document.getElementById("clock-hour"),
  minutes = document.getElementById("clock-minutes");

const clock = () => {
  // we get the date object
  let date = new Date();

  // we get the hours and minutes
  // (current time)/12(hours)*360(deg circle)
  // (current minute)/60(minutes) *360(deg circle)

  let hh = (date.getHours() / 12) * 360,
    mm = (date.getMinutes() / 60) * 360;

  // we add arotation to the elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
};
setInterval(clock, 1000); // (updates every 1s) 1000=1s

// ================ TIME AND DATE TEXT========
const dateDayWeek = document.getElementById("date-day-week"),
  dateMonth = document.getElementById("date-month"),
  dateDay = document.getElementById("date-day"),
  dateYear = document.getElementById("date-year"),
  textHour = document.getElementById("text-hour"),
  textMinutes = document.getElementById("text-minutes"),
  textAmPm = document.getElementById("text-ampm");

const clockText = () => {
  // we get the date object
  let date = new Date();

  // we get the time and date
  let dayWeek = date.getDay(),
    month = date.getMonth(),
    day = date.getDate(),
    year = date.getFullYear(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    ampm;

  //  we get the days of the week and the monthe.(first day of the week SUNDAY)
  let daysWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // we add the corresponding dates
  dateDayWeek.innerHTML = `${daysWeek[dayWeek]}`;
  dateMonth.innerHTML = `${months[month]}`;
  dateDay.innerHTML = `${day},`;
  dateYear.innerHTML = year;

  // if hours is greater than 12 (afternoon), we subtract -12, so that it starts at 1(afternoon)

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  // when it is 0 hours (early morning), we tell it to change to 12hours
  if (hh == 0) {
    hh = 12;
  }
  // if hours is less than 10, add a 0(01,02,03,....09)
  if (hh < 10) {
    hh = `0${hh}`;
  }
  textHour.innerHTML = `${hh}:`;

  //if minutes is less than 10,add a 0(01,02,03,....09)
  if (mm < 10) {
    mm = `0${mm}`;
  }
  textMinutes.innerHTML = mm;
};
setInterval(clockText, 1000); // (updates every 1s)1000=1s
