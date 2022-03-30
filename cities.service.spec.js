const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const rewire = require("rewire");
const NotFoundError = require("./not-found.error");
const citiesService = rewire("./cities.service");

chai.use(chaiAsPromised);
chai.should();

const fakeData = {
    data: {
        places: [{ "place name": "Westport", "state abbreviation": "NY" }],
        country: "United States",
    },
};

const faker = () => ({
    getCityDataByZipCode: (zip) => {
        if (zip === "1") {
            throw new NotFoundError("Wrong ZIP, no city found");
        }
            return fakeData;
    },
});

citiesService.__set__("citiesRepository", faker());

describe("Unit tests for cities.service.spec.js", () => {
    it("Tests if getCityByZipCode function works correctly", () => {
        return citiesService
            .getCityByZipCode()
            .should.eventually.equal("Westport, NY, United States");
    });

    it("In the case of wrong ZipCode throw error", () => {
        return citiesService
            .getCityByZipCode("1")
            .should.eventually.be.rejectedWith(NotFoundError);
    });
});