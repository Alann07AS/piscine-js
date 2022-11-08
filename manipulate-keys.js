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
function reduceKeys(obj, func, acc = '') {
    return Object.keys(obj).reduce(func, acc)
}
const cart=  {
    vinegar: 80,
    sugar: 100,
    oil: 50,
    onion: 200,
    garlic: 22,
    paprika: 4,
}
console.log(reduceKeys(cart, (acc, cr) => acc.concat(', ', cr)));