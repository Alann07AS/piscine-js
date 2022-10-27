function get(src, path) {
    let allPath = path.split('.')
    if (allPath.length == 1) {return src[path]}
    const recuGet = function (src, path, i) {
        if (i == path.length) {return src}
        return recuGet(src[path[i]], path, i+1)
    }
    return recuGet(src, allPath, 0)
}

// const sr = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// 
// console.log(get(sr, path) )// -> 'peekaboo'