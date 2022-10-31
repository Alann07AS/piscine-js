function isValid(date) {
    if ( isNaN(date) || date == 0) {
        return false
    } else {
        return true
    }
}
function isAfter(date, date2) {
    return date > date2
}
function isBefore(date, date2) {
    return date2 > date
}
function isFuture(date) {
    return Date.now() > date
}
function isPast(date) {
    return Date.now() < date
}


console.log(isValid(''));
// console.log(isValid(Date.now()));
// console.log(isValid(new Date('December 17, 1995 03:24:00')));
// console.log(isValid(new Date(1488370835081)));
// console.log(isValid(new Date('1995-12-17T03:24:00')));
// console.log(isValid(new Date('1995-12-17T03:24:00').getTime()));