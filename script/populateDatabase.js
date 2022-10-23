const axios = require("axios");
const University = require("../src/models/University");

// argentina = 174
// brazil = 342
// chile = 128
// colombia = 204
// paraguay = 26
// peru = 132
// suriname = 2
// uruguay = 12
// TOTAL = 1020

const apiUrl = 'http://universities.hipolabs.com/search'
const countriesList = ["argentina", "brazil", "chile", "colombia", "paraguay", "peru", "suriname", "uruguay"]

async function fetchUniversitiesByCountry(country) {
    const { data: universitiesByCountry } = await axios.get(apiUrl,
        {
            params: {
                country
            }
        }
    );

    return universitiesByCountry;
};

async function populateUniversitiesDatabase() {
    for (let country of countriesList) {
        const universitiesByCountry = await fetchUniversitiesByCountry(country)

        University.insertMany(universitiesByCountry)
    }
}

async function depopulateUniversities() {
    for (let country of countriesList) {
        const universitiesByCountry = await fetchUniversitiesByCountry(country)

        University.remove(universitiesByCountry)
    }
}

module.exports = { populateUniversitiesDatabase, depopulateUniversities }