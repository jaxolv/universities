const listAllUniversitiesService = require('../services/listAllUniversitiesService')

async function listAllUniversitiesController(req, res) {
    try {
        const universities = await listAllUniversitiesService()

        res.status(200).json(universities)

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = listAllUniversitiesController;
