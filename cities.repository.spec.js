const axios = require("axios");
const chai = require("chai");
const sinon = require("sinon");
const citiesRepository = require("./cities.repository");

describe("Cities Repository", () => {
    it("should return the expected result for getCityDataByZipCode function", async () => {
        const expectedResult = {
            country: "United States",
            places: [{ "place name": "Westport", "state abbreviation": "NY" }],
        };

        const stub = sinon
            .stub(axios, "get")
            .callsFake(() => Promise.resolve(expectedResult));

        const data = await citiesRepository.getCityDataByZipCode(1);
        chai.assert.deepEqual(data, expectedResult);
        chai.assert.strictEqual(stub.callCount, 1);
    });
});