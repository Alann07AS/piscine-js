function multiply(a, b) {
    let r = b
    for (;a !== 1; a--) {
        b += r
    }
    return b
}

function divide(a, b) {
    let i = 1
    for (;multiply(i, a) < b; i++) {}
    return i
}

function modulo(a, b) {
    return multiply(a, b) - divide(a, b)
}

console.log(multiply(34, 78))