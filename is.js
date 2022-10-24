
// remove before push !!

is.num = function (params) {
    if (typeof(params) === 'number') {
        return true
    } else {
        return false
    }
}
is.nan = function (params) {
    if (isNaN(params)) {
        return true
    } else {
        return false
    }

}
is.str = function (params) {
    if (typeof(params) === 'string') {
        return true
    } else {
        return false
    }

}
is.bool = function (params) {
    if (typeof(params) === 'boolean') {
        return true
    } else {
        return false
    }
}
is.undef = function (params) {
    if (typeof(params) === 'undefined') {
        return true
    } else {
        return false
    }
}
is.def = function (params) {
    if (typeof(params) === 'undefined') {
        return false
    } else {
        return true
    }
}
is.arr = function (params) {
    if (params.isAray()) {
        return true
    } else {
        return false
    }
}
is.obj = function (params) {
    if (typeof(params) === 'object') {
        return true
    } else {
        return false
    }
}
is.fun = function (params) {
    if (typeof(params) === 'function') {
        return true
    } else {
        return false
    }
}
is.truthy = function (params) {
    if ((params)) {
        return true
    } else {
        return false
    }
}
is.falsy = function (params) {
    if (!(params)) {
        return true
    } else {
        return false
    }
}

// !!!!!!!!

