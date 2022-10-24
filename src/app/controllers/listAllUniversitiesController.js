const listAllUniversitiesService = require('../services/listAllUniversitiesService');

async function listAllUniversitiesController(req, res) {
    const country = req.query.country;

    try {
        const data = await listAllUniversitiesService(country);

        res.status(data.status).json(data.result);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

module.exports = listAllUniversitiesController;
