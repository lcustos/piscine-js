//Create a function firstDayWeek that receives a week of the year (from 1 to 53) and a year (as a string), and returns the first day of that week, in the format: 'dd-mm-yyyy'.
//
// In this task you have to assume that the week #1 is in all cases the week which contains the 1st of January.
//
// By beginning of the week we mean the monday of that week.
//
// If the first week is requested and it starts on the previous year of the presented one, it should return the first day of the year.

function firstDayWeek(week, year) {
    let date = new Date(year, 0, 1);
    let day = date.getDay();
    let firstDay = date.getDate() - day + 1;
    let firstDayWeek = new Date(year, 0, firstDay + (week - 1) * 7);
    return firstDayWeek.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}
