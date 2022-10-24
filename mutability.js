
const clone1 = {
    name: person.name,
    age: person.age,
    country: person.country,
}
const clone2 = {
    name: person.name,
    age: person.age,
    country: person.country,
}
const samePerson = person

// console.log("C1", clone1)
// console.log("C2", clone2)
// console.log("same", samePerson)
// console.log("person", person)

person.age += 1;
person.country = 'FR'

// console.log("C1", clone1)
// console.log("C2", clone2)
// console.log("same", samePerson)
// console.log("person", person)
