function sign(params) {
    if (params == 0) {
        return 0
    }
    if (params > 0) {
        return 1
    } else {
        return -1
    }
}

function sameSign(a, b) {
    if (sign(a) == sign(b)) {
        return true
    } else {
        return false
    }
}