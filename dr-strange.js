//Instead of a normal week having only 7 days, it will have 14 days. Let me explain, this new week will have 14 days, from Monday to Sunday then secondMonday to secondSunday. Your purpose is to create a new function addWeek, that takes as parameter a Date and that will return what week day the given date is, according to your new week format. Week number should be count from 0001-01-01.

function addWeek(date) {
  let day = date.getDay();
  let week = date.getDate() + day;
  if (week > 14) {
    week = week - 14;
  }
  return week;
}

//Now imagine you have a doctor appointment and you have to wait some hours, but you do not want to wait, so you decided that you need to create a function timeTravel that allows you to change the time according to your needs. This function will give you the power to go backwards or forwards in time.
//
// So, you will have a function that takes an object with the following {date, hour, minute, second}. This object will be responsible for changing the hour, minute and second of the given date.

function timeTravel(date) {
  let newDate = new Date(date.date);
  newDate.setHours(date.hour);
  newDate.setMinutes(date.minute);
  newDate.setSeconds(date.second);
  return newDate;
}