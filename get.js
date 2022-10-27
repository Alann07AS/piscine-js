function get(src, path) {
    let allPath = path.split('.')
    if (allPath.length == 1) {return src[path]}
    const recuGet = function (src, path, i) {
        if (i == path.length) {return src}
        if (src[path[i]] == undefined) {return undefined}
        return recuGet(src[path[i]], path, i+1)
    }
    return recuGet(src, allPath, 0)
}
