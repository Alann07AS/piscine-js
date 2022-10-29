function ionOut(params = '') {
    return params.match(RegExp(/\w*t(?=ion)/, 'g'))
}

console.log(ionOut('attention, direction'));