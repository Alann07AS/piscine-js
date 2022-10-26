function multiply(a, b) {
    let s = 1
    if (a >= 0) {
        s = -1
    }
    let r = b
    for (;a !== 0; a+=s) {
        b += r
    }
    b -=r
    if (s === 1) {
        return -b
    }
    return b
}

function divide(a, b) {
    let neg = false
    if (a < 0) { a = -a; neg = true }
    if (b < 0 && neg === true) { b = -b; neg = false } else if (b < 0) { b = -b; neg = true}
    if (b>a) {return 0}
    let i = 0
    if (a>b) { let t = a; a = b; b = t}
    for (;multiply(i, a) <= b; i++) {}
    i--
    if (neg) {
        return -i
    }
    return i
}

function modulo(a, b) {
    return a-multiply(divide(a, b),b)
}

console.log(divide(22,123))