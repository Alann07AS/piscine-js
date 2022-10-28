function sums(nb) {
    if (nb <= 1) {return []}
    let arr = new Array
    let resultArr = []
    for (let i = 0; i < nb; i++) {
        arr.push(1)
    }
    for (;arr.length != 1;) {
        console.log(arr)
        resultArr.push([...arr])
        if (arr[arr.length-2]+1 == arr[arr.length-1] || arr[arr.length-2] == arr[arr.length-1]) {
            arr[arr.length-2] = arr[arr.length-1] + arr[arr.length-2]
            arr.pop()
            continue
        }
        if (arr[arr.length-2] < arr[arr.length-1] && !(arr[arr.length-2]+3 < arr[arr.length-1])) {
            arr[arr.length-2]++
            arr[arr.length-1]--
            continue
        }
        if (arr[arr.length-2]+3 < arr[arr.length-1] || (arr.length == 2)) {
            arr[arr.length-2]++
            arr[arr.length-1]--
            let temp = arr[arr.length-1]/2
            arr.pop()
            arr.push(Math.floor(temp))
            arr.push(Math.ceil(temp))
            continue
        }
    }
    console.log(arr)
    return resultArr
}


// 5    1,1,1,1,1    1,1,1,2    1,1,3    1,4    1,2,2     3,2

// 7     1,1,1,1,1,1,1     1,1,1,1,1,2      1,1,1,1,3      1,1,1,4     1,1,5   1,6    1,3,3     4,3    2,2,3    1,1,2,3    1,3,3   


console.log(sums(7), 'salut')

console.log(sums(0),)
console.log(sums(1),)
console.log(sums(2),)
console.log(sums(4),)
console.log(sums(7),)
console.log(sums(10),)