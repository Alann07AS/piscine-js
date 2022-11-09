function mapEntries(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        const [key1, value1] = func([key, value])
        newObj[key1] = value1
    }
    return newObj
}
function isReg(param) {
    console.log(param instanceof RegExp);
    return param instanceof RegExp
}
function deepCopy(entrie) {
    if(Array.isArray(entrie)) {
        return entrie.map((val)=> deepCopy(val))
    } else if(typeof entrie === 'object' && !isReg(entrie)) {
        return mapEntries(entrie, ([k,v])=> [k, deepCopy(v)])
    } else {
        return entrie
    }
}
//&& !entrie instanceof RegExp
// console.log(_.isRegExp(/geek/));
console.log(deepCopy({ user: 'mika', age: 37 }));
console.log(deepCopy({ a: { b: { c: 1 } } }));
console.log(deepCopy([console.log, /hello/]));
