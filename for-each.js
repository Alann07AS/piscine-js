function forEach(arr, func) {
    let arr2 = [...arr]
        for (let i = 0; i < arr.length; i++) {
            arr2 = func(arr[i], i, arr2)
        }
}