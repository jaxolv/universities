const University = require('../models/University')

async function listAllUniversitiesService() {
    try {
        const universities = await University.find()

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
            list_universities: listUniversities
        }

    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}

module.exports = listAllUniversitiesService;