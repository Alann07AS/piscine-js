function forEach(arr, func) {
    let arr2 = []
        for (let i = 0; i < arr.length; i++) {
            arr2.push(func(arr[i], i, arr2))
        }
}