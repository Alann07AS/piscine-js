function longWords(arr) {
    return arr.every(x => x.length >= 5 )
}
function oneLongWord(arr) {
    return arr.some(x => x.length >= 10 )
}
function noLongWords(arr) {
    return !arr.some(x => x.length >= 7 )
}
// let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
// let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
// let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
// let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']
// console.log(noLongWords(arr1))
// console.log(noLongWords(arr2))
// console.log(noLongWords(arr3))
// console.log(noLongWords(arr4))