
function isFriday(dates) {
    if (dates.getDay() == 5) {
        return true
    } else {
        return false
    }
} 
function isWeekend(dates) {
    const day = dates.getDay();
    if (day == 0 || day == 6) {
        return true
    } else {
        return false
    }
} 
function isLeapYear(dates) {
    dates.setMonth(1)
    dates.setDate(29)
    if (dates.getDate() == 29) {
        return true
    } else {
        return false
    }
} 
function isLastDayOfMonth(dates) {
    date.setDate(date.getDate() + 1)
    if ( date.getDate() == 1) {
        return true
    } else {
        return false
    }
}  