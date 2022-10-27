function triangle(str, nb) {
    let triangle = ''
    let strS = str
    for (let i = 0; i < nb; i++) {
        triangle += strS + '\n'
        strS += str
    }
    return triangle.slice(0, triangle.length-1)
}
