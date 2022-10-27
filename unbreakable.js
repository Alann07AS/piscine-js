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
    for (let i = 0; i < str.length; i++) {
        let last = i
        if (str.slice(i,i+sep.length) == sep ) {
            newArr.push(str.slice(firstPose,i))
            firstPose = i+sep.length
            i = i+sep.length
        };
        if (i == str.length-1) {
            console.log(firstPose,str.length-1)
            newArr.push(str.slice(firstPose,str.length))
        }
    }
    return newArr
}

// console.log(split('1, i2, i3, i4', ', i'))