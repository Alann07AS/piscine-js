function multiply(a, b) {
    for (;a !== 0; a--) {
        b += b
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