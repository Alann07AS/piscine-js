// add4 = '+4'
// mul2 = '*2'


function findExpression(nb) {
        let log = []
        let temp = 1
    

    if (nb%2 == 0) {
        log.push(mul2); temp *=2
        for (;(nb - temp)%4 != 0;) {
            log.push(mul2); temp *=2
        }
        for (let i = (nb-temp)/4; i > 0 ; i--) {
            log.push(add4); temp += 4
        }
        return '1 ' + log.join(' ')
    }
    if ((nb-1)%4 == 0) {
        for (;temp != nb;) {
            log.push(add4); temp += 4
        }
        return '1 ' + log.join(' ')
    }
    return undefined
}

// console.log((findExpression(9)),'   ', 8) // 8))
// console.log((findExpression(14)),'   ', 14) // 14))
// console.log((findExpression(60)),'   ', 60) // 60))
// console.log((findExpression(100)),'   ', 100) // 100))
// console.log((findExpression(100)),'   ', 100) // 100))
// console.log((findExpression(280)),'   ', 280) // 280))
// console.log((findExpression(110)),'   ', 110) // 110))
// console.log((findExpression(144)),'   ', 144) // 144))
// console.log((findExpression(200)),'   ', 200) // 200))
// console.log((findExpression(104)),'   ', 104) // 104))
// 
// console.log(findExpression(7)) // undefined))
// console.log(findExpression(63)) // undefined))
// console.log(findExpression(23)) // undefined))
// console.log(findExpression(103)) // undefined))