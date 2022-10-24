function isPositive(params) {
    if (params > 0) {
        return true
    } else {
        return false
    }
}

function abs(params) {
    if (params >= 0){
        return params
    } else {
        return params*-1
    }
}
console.log(isPositive(0))