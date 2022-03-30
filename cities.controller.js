const express = require("express");
const citiesService = require("./cities.service");
const asyncHandler = require("express-async-handler");

const app = express.Router();

app.get("/:zipCode",
    asyncHandler(async (req, res) => {
        const zip = req.params.zipCode
        const city = await citiesService.getCityByZipCode(zip);
        res.send(city)
    })
    )

module.exports = app