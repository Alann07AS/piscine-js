function pick(obj, str) {
    console.log(typeof(str));
    if (typeof(str) == 'object') {
        str = str.join('|')
    }
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if ((key.match(str))) {newObj[key] = value}
    }
    return newObj
}
function omit(obj, str) {
    if (typeof(str) == 'object') {
        str = str.join('|')
    }
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if (!(key.match(str))) {newObj[key] = value}
    }
    return newObj
}
// const  agent = {
//     firstName: 'James',
//     lastName: 'Bond',
//     age: 25,
//     email: 'jamesbond@hotmail.com',
//   }
// const newAgent = { firstName: 'James', lastName: 'Bond' }
// const car = { brand: 'ford', motor: 'v8', year: 2000 }
// const newCar = { brand: 'ford', year: 2000 }
// const user = { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }
// const newUser = { ageVerified   : false }
// const computer = { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' }
// const tools = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }
// const newtool = { drill: 'bosh' }
// const games = { board: 'monopoly', cards: 'poker', dice: 'roulette' }
// const newgames = { dice: 'roulette' }
// const language = { England: 'english', Spain: 'spanish', Portugal: 'portuguese' }
// const newlanguage = { England: 'english', Portugal: 'portuguese' }
// const phone = { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }

// console.log(omit(tools, ['grinders', 'saws']))