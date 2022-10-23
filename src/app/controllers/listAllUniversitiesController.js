const University = require('../models/University')

async function listAllUniversitiesController(req, res) {
    try {
        const universities = await University.find()

        res.status(200).json({
            universities: universities.length,
            list_universities: universities.map((university) => {
                return {
                    id: university._id,
                    name: university.name,
                    country: university.country,
                    state_province: university.state_province
                }
            })
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = listAllUniversitiesController;
