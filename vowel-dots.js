function vowelDots(params = '') {
    params = Array(...params)
    const reg = RegExp(/[aeiouAEIOU]/, 'g')
    for (let i = 0; i < params.length; i++) {
        if (reg.test(params[i])) {
            params.splice(i+1,0,'.')
        }
    }
    return params.join('')
}

// const test = 'example 2, exampla 2'

// console.log(test.match(reg))
// vowelDots('aeitu')