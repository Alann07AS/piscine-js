function appendLeadingZeroes(n){
    if(n <= 9){
    return "0" + n;
    }
    return n
}
function firstDayWeek(number, year) {
    let dat = new Date(year)
    if (number == 1) {
        return appendLeadingZeroes(dat.getDate()) + "-" + appendLeadingZeroes((dat.getMonth()+1)) + "-" + year
    } else {
        let firstDay = dat.getDay()
        if (firstDay == 0) {firstDay=7}
        dat.setDate(8-firstDay+1+(number-2)*7)
        return appendLeadingZeroes(dat.getDate()) + "-" + appendLeadingZeroes((dat.getMonth()+1)) + "-" + year
    }
}

// console.log(firstDayWeek(6,'2022'))

console.log((firstDayWeek(1, '1000'))) //, '01-01-1000'))

console.log((firstDayWeek(52, '1000'))) //, '22-12-1000'))

console.log((firstDayWeek(2, '0001'))) //, '08-01-0001'))

console.log((firstDayWeek(43, '1983'))) //, '17-10-1983'))

console.log((firstDayWeek(23, '0091'))) //, '04-06-0091'))

console.log((firstDayWeek(2, '2017'))) //, '02-01-2017'))
