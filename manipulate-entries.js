// small database with nutrition facts, per 100 grams
// prettier-ignore
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

function filterEntries(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if (func([key,value])) {
            newObj[key] = value
        }
    }
    return newObj
}
function mapEntries(obj, func) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        const [key1, value1] = func([key, value])
        console.log(key1, value1);
        newObj[key1] = value1
    }
    return newObj
}
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
function reduceEntries(obj, func, acc) {
    return reduce(Object.entries(obj), func, acc)
}
function totalCalories(obj) {
    return Math.round(reduceEntries(obj, (acc, [k, v]) => acc += ((v/100)*(nutritionDB[k].calories)), 0)*10)/10
}
function lowCarbs(obj) {
    return filterEntries(obj, ([k, v]) => ((v/100)*(nutritionDB[k].carbs)) < 50)
}
function cartTotal(obj) {
    return mapEntries(obj, ([k, v]) => {
        return [k, {
            calories: Math.round((v/100)*nutritionDB[k].calories*1000)/1000,
            protein: Math.round((v/100)*nutritionDB[k].protein*1000)/1000,
            carbs: Math.round((v/100)*nutritionDB[k].carbs*1000)/1000,
            sugar: Math.round((v/100)*nutritionDB[k].sugar*1000)/1000,
            fiber: Math.round((v/100)*nutritionDB[k].fiber*1000)/1000,
            fat: Math.round((v/100)*nutritionDB[k].fat*1000)/1000 
        }]
    })
}



const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }
// console.log(reduceEntries(groceriesCart1, (acc, [k, v]) => acc + k + v, ''),)//'oil500onion230garlic220paprika480',

console.log(cartTotal(groceriesCart1));