function join(str, sep = '') {
    let result = ''
    str.forEach((element, i) => {
        if (i != str.length-1) {result += element + sep}
    });
    return result + str[str.length-1]
}

function split(str, sep) {
    let newArr = new Array
    let firstPose = 0
    if (str == '') {return Array(str)}
    for (let i = 0; i < str.length; i++) {
        if (sep == '') {newArr.push(str[i]); continue}
        if (str.slice(i,i+sep.length) == sep ) {
            newArr.push(str.slice(firstPose,i))
            firstPose = i+sep.length
            i = i+sep.length-1
        };
        if (i >= str.length-1) {
            newArr.push(str.slice(firstPose,str.length))
        }
    }
    return newArr
}

// console.log(split('a b c', ' ')) //, ['a', 'b', 'c']))
// console.log(split('ggg - ddd - b', ' - ')) //, ['ggg', 'ddd', 'b']))
// console.log(split('ee,ff,g,', ',')) //, ['ee', 'ff', 'g', '']))
// console.log(split('Riad', ' ')) //, ['Riad']))
// console.log(split('rrrr', 'rr')) //, ['', '', '']))
// console.log(split('rrirr', 'rr')) //, ['', 'i', '']))
// console.log(split('Riad', '')) //, ['R', 'i', 'a', 'd']))
// console.log(split('', 'Riad')) //, ['']))
