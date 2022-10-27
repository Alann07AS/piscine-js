function chunk(arr, ln) {
    let newSlice = new Array
    let cp = 0
    let i = 1
    if (Math.floor(arr.length%ln) != 0) {i--}
    for (; i <= Math.floor(arr.length/ln); i++) {
        console.log(arr.slice(cp,cp+ln))
        newSlice.push(arr.slice(cp,cp+ln))
        cp = ln
    }
    return newSlice
}

// console.log(chunk(['a', 'b', 'c', 'd'], 4))