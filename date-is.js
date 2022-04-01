//Create the following functions:
//
// isValid, this function must return false if it's an invalid date
// isAfter, this function will receive two valid dates and return true if the first date is bigger then the second date
// isBefore, this function will receive two valid dates and return true if the first date is lesser then the second date
// isFuture, will return true if the date given as parameter is valid and higher than the present date
// isPast, will return true if the date given as parameter is valid and less than the present date

function isValid(date){
    return !(isNaN(date) || date === 0);
}
function isAfter(date1,date2){
    let res = date1 - date2
    return res > 0;
}
function isBefore(date1,date2){
    let res = date1 - date2
    return res < 0;
}
function isFuture(date1){
    let date2 = new Date()
    let res = date1 - date2
    return res > 0;
}
function isPast(date1){
    if(!isValid(date1)){
        return false
    }
    let date2 = new Date()
    let res = date1 - date2
    return res < 0;
}
