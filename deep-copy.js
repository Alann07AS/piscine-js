function mapEntries(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        const [key1, value1] = func([key, value])
        newObj[key1] = value1
    }
    return newObj
}
function deepCopy(entrie) {
    console.log(Array.isArray(entrie), entrie);
    if(Array.isArray(entrie)) {
        return entrie.map((val)=> deepCopy(val))
    } else if(typeof entrie === 'object') {
        return mapEntries(entrie, ([k,v])=> [k, deepCopy(v)])
    } else {
        return entrie
    }
}

console.log(deepCopy({ user: 'mika', age: 37 }));
console.log(deepCopy({ a: { b: { c: 1 } } }));