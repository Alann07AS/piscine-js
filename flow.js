function flow(arrFunc) {
    return function (...param) {
        let res = param
        arrFunc.forEach(func => {
            res = [func(...res)]
        });
        return res
    }
}