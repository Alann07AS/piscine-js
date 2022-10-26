function repeat(s, nb) {
    let r = ""
    for (;nb !== 0;nb--) {
        r += s
    }
    return r
}

// console.log(repeat('a ', 10))