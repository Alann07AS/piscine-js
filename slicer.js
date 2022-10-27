function slice(sli, i = 0, imax = Array(...sli).length) {
    let r = 1
    if (imax < 0 ) { imax = Array(...sli).length + imax}
    if (i < 0 ) { i = Array(...sli).length + i}
    let a = []
    console.log(i, imax)
    for (;i != imax; i+= r) {
        a.push(sli[i])
    }
    if (typeof(sli) == 'string') {return a.join('')}
    return a
}


// const a = [2,8,9]
console.log(slice('abcdef', -3, -1))