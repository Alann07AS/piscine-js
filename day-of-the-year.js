function dayOfTheYear(date) {
    date = new Date(date)
    let date1_01 = new Date(date)
    date1_01.setDate(1)
    date1_01.setMonth(0)
    let comp = 1
    for (; date1_01 < date; date1_01.setDate(date1_01.getDate()+1)) {
        comp++
    }
    return comp
}

console.log(dayOfTheYear('2048-12-08'))