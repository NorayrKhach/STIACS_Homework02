const citiesRepository = require("./cities.repository");
const NotFoundError = require("./not-found.error");

const getCityByZipCode = async (zip) => {
    try {
        const result = await citiesRepository.getCityDataByZipCode(zip);
        const { places, country } = result.data;
        return `${places[0]["place name"]}, ${places[0]["state abbreviation"]}, ${country}`;
    } catch {
        throw new NotFoundError("No cities found!");
    }
};

module.exports = {
    getCityByZipCode,
};