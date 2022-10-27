function nasa(N) {
    let result = ''
    let txt
    for (let i = 1; i <= N; i++) {
        if (i%3 == 0) {
            if (i%5 == 0) {txt = 'NASA'} else {txt = 'NA'}
        } else if (i%5 == 0) {txt = 'SA'} else {txt = i.toString()}
        result += txt + " "
    }
    return result.slice(0, result.length-1)
}

// console.log(nasa(15))