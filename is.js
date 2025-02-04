const is = {}
// remove before push !!
is.num = (n) => typeof(n) === 'number'
is.nan = (n) => Number.isNaN(n)
is.str = (n) => typeof(n) === 'string'
is.bool = (n) => typeof(n) === 'boolean'
is.undef = (n) => typeof(n) === 'undefined'
is.def = (n) => !(typeof(n) === 'undefined')
is.arr = (n) => Array.isArray(n)
is.obj = (n) => typeof n === 'object' && !is.fun(n) && !is.arr(n) && n !== null
is.fun = (n) => typeof(n) === 'function'
is.truthy = (n) => !!n
is.falsy = (n) => !n
// !!!!!!!!
