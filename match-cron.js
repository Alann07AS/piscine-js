function matchCron(match ='', date) {
    date = new Date(date)
    match = match.split(' ')
    if (match[0] != '*' && match[0] != date.getMinutes()) {
        return false
    }
    if (match[1] != '*' && match[1] != date.getHours()) {
        return false
    }
    if (match[2] != '*' && match[2] != date.getDate()) {
        return false
    }
    if (match[3] != '*' && match[3]-1 != date.getMonth()) {
        return false
    }
    let day = date.getDay()
    if (day == 0) {day = 7}
    if (match[4] != '*' && match[4] != day) {
        return false
    }
    return true
}

console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))
console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
console.log(matchCron('* * * * *', new Date()))