function slice(sli, i = 0, imax = Array(...sli).length) {
    if (i < 0 || i > sli.length) {i = 0; imax = Array(...sli).length}
    let a = []
    // console.log(i, imax)
    for (;i < imax; i++) {
        a.push(sli[i])
    }
    if (typeof(sli) == 'string') {return String(a)}
    return a
}


// const a = [2,8,9]
console.log(slice('abcdef', 2))