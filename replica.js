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
    // console.log(Object.keys(obj1));
    // console.log(Object.keys(obj2));
    let isInvert = false
    if (Object.keys(obj1).length < Object.keys(obj2).length) {
        isInvert = true
        let objA = {}
        Object.assign(objA, obj1)
        obj1 = {}
        Object.assign(obj1, obj2)
        obj2 = {}
        Object.assign(obj2, objA)
        console.log(obj1);
        console.log(obj2);    
    }
    let newObj = {}
    for (const [key, value] of Object.entries(obj1)) {
        if(Object.keys(obj2).includes(key)) {
            if (typeof value != 'object') {
                newObj[key] = obj2[key]
            } else {
                if (Array.isArray(value)) {
                    if (isSameType(value, obj2[key])) {
                        if (isInvert) {
                            newObj[key] = [...obj2[key],...value]
                        } else {
                            newObj[key] = [...obj1[key], ...obj2[key]]
                        }
                    } else {
                        newObj[key] = obj2[key]
                    }
                } else {
                    if (isSameType(value, obj2[key])) {
                        if (isInvert) {
                            newObj[key] = fusion(obj2[key], value)
                        } else {
                            newObj[key] = fusion(value, obj2[key])
                        }
                    } else {
                        newObj[key] = obj2[key]
                    }
                }
            }
        } else {
            console.log('COUCOUO', key);
            newObj = {...obj1, ...obj2}
        }
    }
    return newObj
}


function replica(src, ...args) {
    args.forEach((obj, i) => {
        console.log(i,'i', obj,'obj', src, 'src');
        src = fusion(src, obj)
    })
    return src
}

// console.log( replica(
//     {},
//     Object.freeze({ line: 'Replicants are like any other machine' }),
//     Object.freeze({ author: 'Rich' })
//   ));

console.log(replica({ a: { b: 1, c: 2 } }, { a: { c: 23 } }));
// console.log({ line: 'Replicants are like any other machine', author: 'Rich' });