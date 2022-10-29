function groupPrice(params) {
    let arr = []
    const regPrice = RegExp(/(\$|USD)[\d]*\.[\d]*/g)
    const regUSD = RegExp(/\d[^\D]?/g)

    for (const eachPrice of params.match(regPrice)) {
        // console.log(eachPrice.match(regUSD));
        arr.push([eachPrice, ...eachPrice.match(regUSD)])
    }
    return arr
}

// console.log(groupPrice('product one its USD9.98 and the second one its $10.20'));