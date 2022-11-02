function map(arr, func) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(func(arr[i], i, arr))
    }
    return arr2
}

function flat(arr = [], deep = 0) {
    let inDeeper = 'NO'
    if (deep == Infinity) {inDeeper = ','; deep = 1}
    for (; deep >= 0 ; deep--) {
        if (arr.join('').includes(inDeeper)) {deep++}
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'object') {
                let temp = (arr.at(i))
                arr.splice(i, 1, ...temp)
                i = i+ temp.length
            }
        }
    }
    return arr
}

function flatMap(arr, func) {
    arr = map(arr, func)
    arr = flat(arr)
    return arr
}

