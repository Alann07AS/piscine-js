function filter(arr, func) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
function reject(arr, func) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
function partition(arr, func) {
    let arrTrue = []
    let arrFalse = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            arrTrue.push(arr[i])
        } else {
            arrFalse.push(arr[i])
        }
    }
    return [arrTrue, arrFalse]
}
// const check1 = (el) => el % 2 === 0
// const onlyNumbers = [
//     10,
//     -10,
//     20,
//     -95,
//     15,
//     86,
//     2,
//     3,
//     5,
//     32,
//     33,
//     45,
//     450,
//     950,
//     66,
//     150,
// ]
// console.log(filter(onlyNumbers, check1))