function adder(arr, init = 0) {
    return arr.reduce( (previousValue, currentValue) => previousValue + currentValue, init );
}

function sumOrMul(arr, init = 0) {
    return arr.reduce( (a, b) => {
        if (b%2 == 0) {
            return a * b
        } else {
            return a + b
        }
    }, init );
}

function funcExec(arrFunc, init = 0) {
        arrFunc.reduce((a, b) => b(a), init)
}

// console.log(sumOrMul([1, 2, 3, 5, 8], 5));