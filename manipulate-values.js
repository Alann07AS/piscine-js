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
    let acc = obj[Object.keys(obj)[0]]
    for (const [key, value] of Object.entries(obj)) {
        if (key != Object.keys(obj)[0]) {
            acc = (func(acc, value))
        }
    }
    return acc
}