function letterSpaceNumber(params = '') {
    const reg = RegExp(/[a-z] [0-9]\b/, 'g')
    return (params.match(reg) || [])
    
}

// const test = 'example 2, exampla 2'

// console.log(test.match(reg))