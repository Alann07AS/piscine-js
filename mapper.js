function map(arr, func) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(func(arr[i], i, arr))
    }
    return arr2
}

function flat(arr = [], deep = Infinity) {
    let inDeeper = 'NO'
    if (!arr.some(x => typeof(x) == 'object')) {return arr}
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
    console.log("1");
    arr = map(arr, func)
    console.log("2");
    arr = flat(arr)
    console.log("3");
    return arr
}

console.log( flatMap([1, 2, 3], (n) => [n, n]))
const mixed = [[10], -10, 20, -95, 86, [102], [35, 89], 110]
const add1 = (el) => el + 1
console.log(flatMap(mixed, add1))