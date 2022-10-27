function nasa(N) {
    if (N%3 == 0) {
        if (N%5 == 0) {return 'NASA'} else {return 'NA'}
    } else if (N%5 == 0) {return 'SA'}
    let result = ''
    for (let i = 1; i <= N; i++) {
        result += i.toString()
    }
    return result
}
