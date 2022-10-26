function indexOf(arr, val, i = 0) {
    if (i < 0 || i > arr.length) {return -1}
    for (;i < arr.length; i++ ) {
        if (arr[i] == val) {return i}
    };
    return -1
}

function lastIndexOf(arr, val, i = 0) {
    if (i < 0 || i > arr.length) {return -1}
    for (;i >= 0; i-- ) {
        if (arr[i] == val) {return i}
    };
    return -1
}

function includes(arr, val) {
    if (indexOf(arr, val, 0) === -1) {return false} else {return true}
}

// const a = [3,9,7]
// console.log(a.length)
// console.log(indexOf(a, 5, 0))