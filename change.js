// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
// }


function get(params) {
    return sourceObject[params]
}
function set(key, value) {
    sourceObject[key] =value
    return sourceObject[key]
}