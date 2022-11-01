function bloodySunday(date) {
    const dayIndex = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    date = new Date(date)
    const y0 = new Date('0001')
    const dayLeft = (date - y0)/1000/60/60/24
    const day = dayLeft%6
    return dayIndex[day]
}

console.log(bloodySunday(new Date('2048-12-08')))
