
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
function isLeapYearis(dates) {
    dates.setMonth(1)
    dates.setDate(29)
    if (dates.getDate() == 29) {
        return true
    } else {
        return false
    }
} 
function isLastDayOfMonthhe(dates) {
    date.setDate(date.getDate() + 1)
    if ( date.getDate() == 1) {
        return true
    } else {
        return false
    }
}  