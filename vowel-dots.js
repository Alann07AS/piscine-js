const vowels = RegExp(/[aeiouAEIOU]/, 'g')
function vowelDots(params = '') {
    params = Array(...params)
    for (let i = 0; i < params.length; i++) {
        if (vowels.test(params[i])) {
            params.splice(i+1,0,'.')
        }
    }
    return params.join('')
}

// const test = 'example 2, exampla 2'

// console.log(test.match(vowels))
// vowelDots('aeitu')