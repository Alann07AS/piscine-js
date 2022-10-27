function cutFirst (str) {
    return str.slice(2)
}
function cutLast (str) {
    return str.slice(0, str.length-2)
}
function cutFirstLast (str) {
    return  cutLast(cutFirst(str))
}
function keepFirst (str) {
    return str.slice(0, 2)
}
function keepLast (str) {
    return str.slice(str.length-2, str.length)
}
function keepFirstLast (str) {
    return keepFirst(str)+keepLast(str)
}

// let t = 'azdsgf'
// console.log(keepFirstLast(t))