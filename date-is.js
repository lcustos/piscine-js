//Create the following functions:
//
// isValid, this function must return false if it's an invalid date
// isAfter, this function will receive two valid dates and return true if the first date is bigger then the second date
// isBefore, this function will receive two valid dates and return true if the first date is lesser then the second date
// isFuture, will return true if the date given as parameter is valid and higher than the present date
// isPast, will return true if the date given as parameter is valid and less than the present date

function isValid(date) {
    let dateArray = date.split('/');
    let day = dateArray[0];
    let month = dateArray[1];
    let year = dateArray[2];
    let dateObject = new Date(year, month - 1, day);
    return dateObject.getFullYear() === year && dateObject.getMonth() + 1 === month && dateObject.getDate() === day;
}

function isAfter(date1, date2) {
    return date1 > date2;
}

function isBefore(date1, date2) {
    return date1 < date2;
}

function isFuture(date) {
    return isAfter(date, new Date());
}

function isPast(date) {
    return isBefore(date, new Date());
}

console.log(isValid(''));