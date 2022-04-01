//You were missioned to make the world more productive. Your solution ? no more sundays, you are ask to remove them from the existing calendar.
//
// So now, a week is 6 days from monday to saturday.
//
// To prove your point, create a bloodySunday function that return what week day the given date is.

function bloodySunday(date) {
  var day = date.getDay();
  if (day === 0) {
    return "Sunday";
  } else if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  }
}

console.log(bloodySunday(new Date('0001-01-07')));