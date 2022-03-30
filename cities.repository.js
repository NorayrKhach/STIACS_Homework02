const axios = require("axios");

const getCityDataByZipCode = async (zipCode) =>
    await axios.get(`https://api.zippopotam.us/us/${zipCode}`);

module.exports = {
    getCityDataByZipCode,
};