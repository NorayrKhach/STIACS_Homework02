const express = require("express");
const citiesService = require("./cities.service");
const asyncHandler = require("express-async-handler");

const app = express.Router();

app.get("/:zipCode",
    asyncHandler(async (req, res) => {
        const { zipCode: zip } = req.params;
        const data = await citiesService.getCityByZipCode(zip);
        res.send(data)
    })
    )

module.exports = app 