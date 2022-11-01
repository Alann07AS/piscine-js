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
    if (match[3] != '*' && match[3] != date.getMonth()) {
        return false
    }
    if (match[4] != '*' && match[4] != date.getDay()) {
        return false
    }
    return true
}