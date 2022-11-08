function filterKeys(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if (func(key)) {
            newObj[key] = value
        }
    }
    return newObj
}
function mapKeys(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        newObj[func(key)] = (value)
    }
    return newObj
}
function reduceKeys(obj, func, acc = 0) {
    return Object.keys(obj).reduce(func, acc)
}

// console.log(mapKeys({'salut': 90}, (a)=> a+"TOI"));