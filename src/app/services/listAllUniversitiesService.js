const University = require('../models/University');

async function listAllUniversitiesService(country) {
    try {
        function listUniversities(array) {
            return array.map((university) => {
                return {
                    id: university._id,
                    name: university.name,
                    country: university.country,
                    'state-province': university.state_province,
                    more_info: `http://universities.hipolabs.com/search?name=${university.name.replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20')}`
                }
            })
        }

        if (country) {

            const universitiesByCountry = await University.find({ country });

            if (universitiesByCountry.length === 0) {
                return {
                    status: 400,
                    result: "Country not found in the database."
                }
            };

            return {
                status: 200,
                result: {
                    universities: universitiesByCountry.length,
                    list_universities: listUniversities(universitiesByCountry)
                }
            }
        };

        const universities = await University.find();

        if (universities.length === 0) {
            return {
                status: 200,
                result: "No universities in the database. You have to populate it first."
            }
        }

        return {
            status: 200,
            result: {
                universities: universities.length,
                list_universities: listUniversities(universities)
            }
        }
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = listAllUniversitiesService;
