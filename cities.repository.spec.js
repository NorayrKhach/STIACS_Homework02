const sinon = require("sinon");
const axios = require("axios");
const citiesRepository = require("./cities.repository");
const chai = require("chai");

const fakeData = {
    country: "United States",
    places: [{ "place name": "Westport", "state abbreviation": "NY" }],
};

describe("Unit tests for cities.repository.js", () => {
    it("Tests if getCityDataByZipCode function works correctly", async () => {
        const stub = sinon
            .stub(axios, "get")
            .callsFake(() => Promise.resolve(fakeData));

        const data = await citiesRepository.getCityDataByZipCode(1);
        chai.assert.deepEqual(data, fakeData);
        chai.assert.strictEqual(stub.callCount, 1);
    });
});