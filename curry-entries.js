function defaultCurry(obj1) {
    return function (obj2) {
        return {...obj1, ...obj2}
    }
}

// console.log(defaultCurry({
//     http: 403,
//     connection: 'close',
//     contentType: 'multipart/form-data',
// })({
//     http: 200,
//     connection: 'open',
//     requestMethod: 'GET'
// })
// );

// const personnel = {
//     lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//     sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//     zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//     ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//     calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }

function mapCurry(func) {
    return function (obj) {
        const newObj = {}
        for (const [key, value] of Object.entries(obj)) {
            const [key1, value1] = func([key, value])
            console.log(key1, value1);
            newObj[key1] = value1
        }
        return newObj
    }
}

// console.log(mapCurry(([k, v]) => [`${k}_force`, v])(personnel));

function filterCurry(func) {
    return function (obj) {
        const newObj = {}
        for (const [key, value] of Object.entries(obj)) {
            if (func([key,value])) {
                newObj[key] = value
            }
        }
        return newObj
    }
}

// console.log(filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
// })
// );

function reduce(arr, func, acc) {
    let i = 0
    if (acc == null) {
        acc = arr[0]
        i = 1
    }
    for (; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }
    return acc
} 
function reduceCurry(func) {
    return function (obj, acc = 0) {
        return reduce(Object.values(obj), func, acc)
    }
}
// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0));

function reduceScore(obj, init = 0) {
    init = {pilotingScore: 0, shootingScore: init}
    const forceUser = filterCurry(
        ([k,v]) => {if(v.isForceUser){return [k,v]}}
    )(obj)
    const final = reduceCurry((b, a) => {return {pilotingScore: (b.pilotingScore + a.pilotingScore), shootingScore: (b.shootingScore + a.shootingScore)}})(forceUser, init)
    return final.shootingScore + final.pilotingScore
}
// console.log(reduceScore(personnel, 420));

function filterForce(obj) {
    return filterCurry(([k,v]) => {if(v.isForceUser && v.shootingScore >= 80) {return [k,v]}})(obj)
}
// console.log(filterForce(personnel));

function mapAverage(obj) {
    mapCurry(([k,v]) =>{
        return [k, defaultCurry(v)(
            {averageScore: (v.shootingScore+ v.pilotingScore)/2}
        )]
    })(obj)
}
console.log(mapAverage(personnel));