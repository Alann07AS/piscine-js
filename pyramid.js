function pyramid(str, nb) {
    let triangle = ''
    let strS = str
    let space = ''
    for (let i = (nb * str.length)-str.length; i > 0; i--) {space += ' '}
    for (let i = 0; i < nb; i++) {                    
        triangle += space + strS + '\n'
        strS += str + str
        space = space.slice('0', space.length-str.length)
    }
    return triangle.slice(0, triangle.length-1)
}
