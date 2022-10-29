function groupPrice(params) {
    let arr = []
    const regPrice = RegExp(/(\$|USD)[\d]*\.[\d]*/g)
    const regUSD = RegExp(/\d[^\D]?/g)
    const result = params.match(regPrice)
    if (result == null) {return []}
    for (const eachPrice of result) {
        arr.push([eachPrice, ...eachPrice.match(regUSD)])
    }
    return arr
}

// console.log(groupPrice('this, 0.32, is not a match'));