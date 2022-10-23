const axios = require("axios");
const University = require("../src/app/models/University")

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

module.exports = { populateUniversitiesDatabase }