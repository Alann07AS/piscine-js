// add4 = '+4'
// mul2 = '*2'

function reverse(arr) {
    let newArr = new Array
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    if (typeof(arr) == 'string') {return newArr.join('')}
    return newArr
}


function findExpression(nb) {
        let log = []
        let temp = nb
    for (; temp > 1;) {
        // console.log(temp)
        if (temp%2 == 0) {log.push(mul2); temp/=2} else {log.push(add4); temp-=4}
    }
    log.push('1')
    console.log(Math.trunc(temp))
    if (1 == (temp)) {return reverse(log).join(' ')} else {return undefined}
}

// console.log(findExpression(144))