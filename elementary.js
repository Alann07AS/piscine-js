function multiply(a, b) {
    let r = b
    for (;a !== 1; a--) {
        b += r
    }
    return b
}

function divide(a, b) {
    let i = 1
    if (a>b) { let t = a; a = b; b = t}
    for (;multiply(i, a) < b; i++) {}
    i--
    return i
}

function modulo(a, b) {
    return a-multiply(divide(a, b),b)
}

// console.log(modulo(119, 20))