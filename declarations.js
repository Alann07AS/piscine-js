const escapeStr = '\`\\\/\"\''
const arr = [4, '2']
const obj = [
    new str = "",
    new num = 0,
    new bool = false,
    new undef = undefined
]
const nested = [
    new [4, undefined, '2'],
    obj = [
        new str = "",
        new num = 0,
        new bool = false,
    ]
]

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)