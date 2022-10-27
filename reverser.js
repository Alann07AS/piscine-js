function reverse(arr) {
    let newArr = new Array
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    if (typeof(arr) == 'string') {return newArr.join('')}
    return arr
}

console.log(reverse('abcd'))