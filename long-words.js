const arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
const arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
function longWords(arr) {
    return arr.every(x => x.length >= 5 )
}
function oneLongWord(arr) {
    return arr.some(x => x.length >= 10 )
}
function noLongWords(arr) {
    return !arr.every(x => x.length >= 7 )
}