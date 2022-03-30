const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const rewire = require("rewire");
const NotFoundError = require("./not-found.error");
const citiesService = rewire("./cities.service");

chai.use(chaiAsPromised);
chai.should();

const res = {
    data: {
        country: "United States",
        places: [{ "place name": "Westport", "state abbreviation": "NY" }],
    },
};

const citiesRepositoryFaker = () => ({
    getCityDataByZipCode: (zip) => {
        if (zip === "12993") return res;
        else throw new NotFoundError("Wrong ZIP, no city found");
    },
});

citiesService.__set__("citiesRepository", citiesRepositoryFaker());

describe("Cities Service", () => {
    it("should provide expected output for getCityByZipCode function", () => {
        return citiesService
            .getCityByZipCode("12993")
            .should.eventually.equal("Westport, NY, United States");
    });

    it("should throw a NotFoundError in case of a wrong zip code", () => {
        return citiesService
            .getCityByZipCode("1")
            .should.eventually.be.rejectedWith(NotFoundError);
    });
});