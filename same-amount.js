function sameAmount(str = '', p1, p2) {
    if (str.match(RegExp(p1 ,'g')) === null || str.match(RegExp(p2 ,'g')) === null) {return false}
    return (str.match(RegExp(p1 ,'g')).length === str.match(RegExp(p2 ,'g')).length)
}
