//Create the following functions:
//
// isValid, this function must return false if it's an Invalid Date
// isAfter, this function will receive two valid dates and return true if the first date is bigger then the second date
// isBefore, this function will receive two valid dates and return true if the first date is lesser then the second date
// isFuture, will return true if the date given as parameter is valid and higher than the present date
// isPast, will return true if the date given as parameter is valid and less than the present date

function isValid(date) {
    return !isNaN(date);
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

