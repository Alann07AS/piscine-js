const orbitalPlanet = {
    earth : 1.0,
    mercury : 0.2408467,
    venus : 0.61519726,
    mars : 1.8808158,
    jupiter : 11.862615,
    saturn : 29.447498,
    uranus : 84.016846,
    neptune : 164.79132,
}

const oneEarthYearSecond = 31557600

function dogYears(planet, age) {
    let ageYear = (age / oneEarthYearSecond)*7
    let newAge = ageYear * orbitalPlanet[planet]
    return Math.round(newAge * 100) / 100
}
