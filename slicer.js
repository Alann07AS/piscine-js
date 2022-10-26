function slice(sli, i = 0, imax = Array(...sli).length) {
    let a = []
    console.log(i, imax)
    for (;i < imax; i++) {
        a.push(sli[i])
    }
    return a
}


// const a = [2,8,9]
// console.log(slice(a,2))