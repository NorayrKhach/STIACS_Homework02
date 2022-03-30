const axios = require("axios");

const getCityDataByZipCode = async (zip) =>
    await axios.get(`https://api.zippopotam.us/us/${zip}`);

module.exports = {
    getCityDataByZipCode,
};