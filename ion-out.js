function ionOut(params = '') {
    return params.match(RegExp('\w*t(?=ion)', 'g'))
}