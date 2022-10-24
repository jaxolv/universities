const University = require('../models/University');

async function listAllUniversitiesService(country) {
    try {
        if (country) {
            const universities = await University.find({ country });

            if (universities.length === 0) { return { message: "Country not found." } };

            return {
                universities: universities.length,
                universities_of_country: `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`,
                list_universities: universities.map((university) => {
                    return {
                        id: university._id,
                        name: university.name,
                        country: university.country,
                        'state-province': university.state_province,
                        more_info: `http://universities.hipolabs.com/search?name=${university.name.replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20')}`
                    }
                })
            }
        };

        if (!country) {
            const universities = await University.find();

            return {
                universities: universities.length,
                list_universities: universities.map((university) => {
                    return {
                        id: university._id,
                        name: university.name,
                        country: university.country,
                        state_province: university.state_province,
                        more_info: `http://universities.hipolabs.com/search?name=${university.name.replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20')}`
                    }
                })
            }
        };
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
};

module.exports = listAllUniversitiesService;