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
        newObj[key] = (func(key))
    }
    return newObj
}
function reduceKeys(obj, func, acc = 0) {
    return Object.keys(obj).reduce(func, acc)
}
