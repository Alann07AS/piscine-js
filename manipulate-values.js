function filterValues(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if (func(value)) {
            newObj[key] = value
        }
    }
    return newObj
}
function mapValues(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        newObj[key] = (func(value))
    }
    return newObj
}
function reduceValues(obj, func) {
    return Object.values(obj).reduce(func)
}
