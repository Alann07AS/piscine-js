function hasCity(country, arrCityCountry) {
    return function (city) {
        if (arrCityCountry.indexOf(city) != -1 ) {
            return city + ' is a city from ' + country
        } else {
            return city + ' is not a city from ' + country
        }
    }
}