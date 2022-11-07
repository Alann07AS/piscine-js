function isSameType(value1, value2) {
    if (typeof value1 != typeof value2) {
        return false
    }
    if (typeof value1 == 'object' && Array.isArray(value1) != Array.isArray(value2)) {
            return false
    }
    return true
}

function fusion(obj1 = {}, obj2 = {}) {
    console.log(Object.keys(obj1).length);
    console.log(Object.keys(obj2).length);
    if (Object.keys(obj1).length < Object.keys(obj2).length) {
        let objA = {}
        Object.assign(objA, obj1)
        obj1 = {}
        Object.assign(obj1, obj2)
        obj2 = {}
        Object.assign(obj2, objA)
        console.log(obj1);
        console.log(obj2);    
    }
    const newObj = {}
    for (const [key, value] of Object.entries(obj1)) {
        if(Object.keys(obj2).includes(key)) {
            switch (typeof value) {
                case 'string':
                    if (isSameType(value, obj2[key])) {
                        newObj[key] = value+" "+obj2[key]
                    } else {
                        newObj[key] = obj2[key]
                    }
                    break;
                case 'number':
                    if (isSameType(value, obj2[key])) {
                        newObj[key] = value+obj2[key]
                    } else {
                        newObj[key] = obj2[key]
                    }
                    break;
                default:
                    if (Array.isArray(value)) {
                        if (isSameType(value, obj2[key])) {
                            newObj[key] = [...value, ...obj2[key]]
                        } else {
                            newObj[key] = obj2[key]
                        }
                    } else {
                        if (isSameType(value, obj2[key])) {
                            newObj[key] = fusion(value, obj2[key])
                        } else {
                            newObj[key] = obj2[key]
                        }
                    }
                    break;
            }
        } else {
            newObj[key] = value
        }
    }
    return newObj
}

console.log(fusion({ a: 1 }, { a: { b: 1 } }))