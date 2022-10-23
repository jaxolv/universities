const listUniversitiesByCountryService = require('../services/listUniversitiesByCountryService')

async function listUniversitiesController(req, res) {
    const country = req.query.country;

    try {
        const universities = await listUniversitiesByCountryService(country)

        res.status(200).json(universities)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = listUniversitiesController;
