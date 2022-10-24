
// remove before push !!
const is = {}
// !!!!!!!!


function num(params) {
    if (typeof(params) === 'number') {
        return true
    } else {
        return false
    }
}
function nan(params) {
    if (isNaN(params)) {
        return true
    } else {
        return false
    }

}
function str(params) {
    if (typeof(params) === 'string') {
        return true
    } else {
        return false
    }

}
function bool(params) {
    if (typeof(params) === 'boolean') {
        return true
    } else {
        return false
    }
}
function undef(params) {
    if (typeof(params) === 'undefined') {
        return true
    } else {
        return false
    }
}
function def(params) {
    if (typeof(params) === 'undefined') {
        return false
    } else {
        return true
    }
}
function arr(params) {
    if (params.isAray()) {
        return true
    } else {
        return false
    }
}
function obj(params) {
    if (typeof(params) === 'object') {
        return true
    } else {
        return false
    }
}
function fun(params) {
    if (typeof(params) === 'function') {
        return true
    } else {
        return false
    }
}
function truthy(params) {
    if ((params)) {
        return true
    } else {
        return false
    }
}
function falsy(params) {
    if (!(params)) {
        return true
    } else {
        return false
    }
}