function isPositive(params) {
    if (params > 0) {
        return true
    } else {
        return false
    }
}

function abs(params) {
    if (isPositive(params)){
        return params
    } else {
        return params*-1
    }
}