function isValid(date) {
    if ( isNaN(date) || date == 0) {
        return false
    } else {
        return true
    }
}
function isAfter(date, date2) {
    return isValid(date) && isValid(date2) && date > date2
}
function isBefore(date, date2) {
    return isValid(date) && isValid(date2) && date2 > date 
}
function isFuture(date) {
    return isValid(date) && Date.now() < date
}
function isPast(date) {
    return Date.now() > date  && isValid(date)
}


console.log(isValid(''));
// console.log(isValid(Date.now()));
// console.log(isValid(new Date('December 17, 1995 03:24:00')));
// console.log(isValid(new Date(1488370835081)));
// console.log(isValid(new Date('1995-12-17T03:24:00')));
// console.log(isValid(new Date('1995-12-17T03:24:00').getTime()));

console.log( !isFuture(new Date('1992-01-01')));
console.log( !isFuture(new Date(Date.now() - 1)));
console.log( isFuture(new Date(2077, 11, 31)));
console.log( isFuture(new Date(Date.now() + 1)));

// isPast
console.log( !isPast(new Date(Date.now() + 1)));
console.log( !isPast(new Date(2077, 11, 31)));
console.log( isPast(new Date(1442, 11, 31)));
console.log( isPast(new Date(Date.now() - 1)));