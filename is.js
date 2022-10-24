
// remove before push !!
is = {

num: function (params) {
    if (typeof(params) === 'number') {
        return true
    } else {
        return false
    }
},
nan: function (params) {
    if (isNaN(params)) {
        return true
    } else {
        return false
    }

},
str: function (params) {
    if (typeof(params) === 'string') {
        return true
    } else {
        return false
    }

},
bool: function (params) {
    if (typeof(params) === 'boolean') {
        return true
    } else {
        return false
    }
},
undef: function (params) {
    if (typeof(params) === 'undefined') {
        return true
    } else {
        return false
    }
},
def: function (params) {
    if (typeof(params) === 'undefined') {
        return false
    } else {
        return true
    }
},
arr: function (params) {
    if (params.isAray()) {
        return true
    } else {
        return false
    }
},
obj: function (params) {
    if (typeof(params) === 'object') {
        return true
    } else {
        return false
    }
},
fun: function (params) {
    if (typeof(params) === 'function') {
        return true
    } else {
        return false
    }
},
truthy: function (params) {
    if ((params)) {
        return true
    } else {
        return false
    }
},
falsy: function (params) {
    if (!(params)) {
        return true
    } else {
        return false
    }
}

}
// !!!!!!!!

