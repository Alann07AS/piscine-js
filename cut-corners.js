function power(nb, i) {
    if (nb<1) {return i}
    nb /= 10
    return power(nb, i+1)
}

function getRest(nb) {
    for (;!Number.isInteger(nb);) {
        nb *= 10
    }
}

function trunc (nb) {
    let isNeg = false
    if (nb < 0) {isNeg = true; nb = -nb}
    const recuTrunc = function (add, n, nb) {
        let nBase = n
        if ((n+1 > nb && n-1 < nb)||nBase<1) { return add }
        for (;add<nb;) {
            add += nBase
        }
        add -= nBase
        return recuTrunc(add, nBase/10, nb)
    }
    let p = 1
    for (i = power(nb, 0); i != 0;i--) { p *= 10 }
    if (isNeg)  {return -recuTrunc(0,p,nb)} else {return recuTrunc(0,p,nb)}
}
function ceil (nb) {
    let t = trunc(nb)
    if (t === nb) { return t }
    if (t<0) {return t} else { return t+1 }
}
function floor (nb) {
    let t = trunc(nb)
    if (t === nb) { return t}
    if (t<0) {return t-1} else { return t }
}
function round (nb) {
    let isNeg = 1
    if (nb < 0) {isNeg = -1; nb = -nb}
    if (nb < trunc(nb)+0.5) {
        return floor(nb)*isNeg
    } else {
        return ceil(nb)*isNeg
    }
}

// console.log(round(-123.50))