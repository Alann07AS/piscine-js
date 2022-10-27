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
    if (str.length <= 2) {return str}
    return str.slice(0, 2)
}
function keepLast (str) {
    if (str.length <= 2) {return str}
    return str.slice(str.length-2, str.length)
}
function keepFirstLast (str) {
    if (str.length == 3) {return keepFirst(str).slice(0,1) + keepLast(str)}
    return keepFirst(str)+keepLast(str)
}

console.log(keepFirstLast('afd'))