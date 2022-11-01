
function citiesOnly(arr = []) {
    return arr.map(x => x['city'])
}

function upperCasingStates(arr) {
    return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1))
}

function fahrenheitToCelsius(arr) {
    return arr.map(x => {
        let C = ((parseInt(x.split(/(°)/)[0]))-32)*5/9
        return Math.round(C).toString() + '°C'
    } )
}
function trimTemp(arr) {
    return arr.map(x => {
        x['temperature'] = x['temperature'].replaceAll(' ', '')
        return x
    })
}
function tempForecasts(arr) {
    arr = trimTemp(arr)
    return arr.map(ar => {
        ar['temperature'] = fahrenheitToCelsius([ar['temperature']])[0]
        ar['state'] = upperCasingStates([ar['state']])
        return ar.temperature + 'elsius in ' + ar.city + ', ' + ar.state
    })
}
// console.log(upperCasingStates(['alabama', 'new jersey']));
// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']);

// console.log(trimTemp([
    // { city: 'Los Angeles', temperature: '  101 °F   ' },
    // { city: 'San Francisco', temperature: ' 84 ° F   ' },
    // ]) /* -> [
        // { city: 'Los Angeles', temperature: '101°F' },
        // { city: 'San Francisco', temperature: '84°F' },
    // ] */
// )

// console.log(tempForecasts([
//     {
//         city: 'Pasadena',
//         temperature: ' 101 °F',
//         state: 'california',
//         region: 'West',
//     },
//   ]) // -> ['38°Celsius in Pasadena, California']
// );