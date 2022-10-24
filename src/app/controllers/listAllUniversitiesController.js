const listAllUniversitiesService = require('../services/listAllUniversitiesService');

async function listAllUniversitiesController(req, res) {
    const country = req.query.country;

    try {
        const universities = await listAllUniversitiesService(country);

        res.status(200).json(universities);

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
};

module.exports = listAllUniversitiesController;
