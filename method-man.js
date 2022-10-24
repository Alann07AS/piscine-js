function words(params) {
    return params.split(' ')
}
function sentence(params) {
    return params.join(' ')
}
function yell(params) {
    return params.toUpperCase()
}
function whisper(params) {
    return '*' + params.toLowerCase() + '*'
}
function capitalize(params) {
    return params.charAt(0).toUpperCase()+params.substr(1)
}
console.log(capitalize('str'))