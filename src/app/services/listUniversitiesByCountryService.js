const University = require('../models/University')

async function listUniversitiesByCountryService(country) {
    try {
        if (!country) {
            return { message: "It's necessary to inform the country to this search." }
        }

        const universities = await University.find({ country })

        if (!universities) { return { message: "Country not found." } }

        const listUniversities = universities.map((university) => {
            return {
                id: university._id,
                name: university.name,
                country: university.country,
                state_province: university.state_province
            }
        })

        return {
            universities: universities.length,
            for_more_info: `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`,
            list_universities: listUniversities
        }
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = listUniversitiesByCountryService;
