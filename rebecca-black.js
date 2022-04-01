//Create the following functions:
//
// isFriday returns true if the date is a friday
// isWeekend returns true if the date is a day of the weekend
// isLeapYear returns true if the year of the date is a leap year
// isLastDayOfMonth returns true if the date is the last day of the month

function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function isFriday(date) {
    let friday = getWeekDay(date)
    return friday === 'Friday';
}

function isWeekend(date) {
    let friday = getWeekDay(date)
    console.log(friday)
    return friday === 'Saturday' || friday === 'Sunday';
}

function isLeapYear(date) {
    let year = date.getFullYear()
    let flag = false
    if (year % 4 === 0) {
        flag = true
    }
    if (year % 100 === 0) {
        flag = false
    }
    if (year % 400 === 0) {
        flag = true
    }
    return flag
}

function isLastDayOfMonth(date) {
    let month = date.getMonth()
    date.setHours(30)
    let getMonth = date.getMonth()
    return month !== getMonth;
}