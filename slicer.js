function slice(sli, i = 0, imax = Array(...sli).length) {
    let r = 1
    while (i < 0 ) { i = imax + i}
    let a = []
    // console.log(i, imax)
    for (;i != imax; i+= r) {
        a.push(sli[i])
    }
    if (typeof(sli) == 'string') {return a.join('')}
    return a
}


// const a = [2,8,9]
console.log(slice('abcdef', -2))