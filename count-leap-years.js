function isLeapYear(date) {
    date.setMonth(1)
    date.setDate(29)
    if (date.getDate() == 29) {
        return true
    } else {
        return false
    }
}

function countLeapYears(date) {
    date = new Date(date)
    let date0 = new Date('0001')
    let comp = 0
    for (; date0.getFullYear() < date.getFullYear(); date0.setFullYear(date0.getFullYear()+1)) {
        if (isLeapYear(date0)) {
            comp++
        }
    }
    return comp
}

console.log(countLeapYears('0001-12-01'))