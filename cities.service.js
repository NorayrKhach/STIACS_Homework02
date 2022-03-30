const citiesRepository = require("./cities.repository");
const NotFoundError = require("./not-found.error");

const getCityByZipCode = async (zip) => {
    try {
        const cityData = await citiesRepository.getCityDataByZipCode(zip);
        const places = cityData.data.places;
        const country = cityData.data.country;
        return `${places[0]["place name"]}, ${places[0]["state abbreviation"]}, ${country}`;
    } catch {
        throw new NotFoundError("No cities found!");
    }
};

module.exports = {
    getCityByZipCode,
};