function cutFirst (str) {
    if (str.length <= 2) {return str}
    return str.slice(2)
}
function cutLast (str) {
    return str.slice(0, str.length-2)
}
function cutFirstLast (str) {
    if (str.length <= 2) {return str}
    return  cutLast(cutFirst(str))
}
function keepFirst (str) {
    if (str.length <= 2) {return str}
    return str.slice(0, 2)
}
function keepLast (str) {
    if (str.length <= 2) {return str}
    return str.slice(str.length-2, str.length)
}
function keepFirstLast (str) {
    if (str.length <= 2) {return str}
    return keepFirst(str)+keepLast(str)
}

// let t = 'ab'
// console.log(cutFirst(t))