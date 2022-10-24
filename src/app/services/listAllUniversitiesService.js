const University = require('../models/University');

async function listAllUniversitiesService(country) {
    try {
        const universitiesByCountry = await University.find({ country });

        const universities = await University.find();

        if (!universities) {
            return {
                status: 204,
                result: "No universities in the database. You have to populate it first."
            }
        }

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

            if (universitiesByCountry.length === 0) {
                return {
                    status: 400,
                    result: "Country not saved in the database."
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
