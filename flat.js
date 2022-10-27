function flat(arr = [], deep = 0) {
    for (; deep >= 0; deep--) {
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
console.log(flat([1])) //, [1]))
console.log(flat([1, [2]])) //, [1, 2]))
console.log(flat([1, [2, [3]]])) //, [1, 2, [3]]))
console.log(flat([1, [2, [3], [4, [5]]]], 2)) //, [1, 2, 3, 4, [5]]))
console.log(flat([1, [2, [3], [4, [5]]]], 3)) //, [1, 2, 3, 4, 5]))

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(4, 0, ...[4, 7])
// console.log(months)