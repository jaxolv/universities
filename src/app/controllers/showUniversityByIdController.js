const showUniversityByIdService = require('../services/showUniversityByIdService')

async function showUniversityByIdController(req, res) {
    const id = req.params.id;

    try {
        const data = await showUniversityByIdService(id);

        return res.status(data.status).json(data.result);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

module.exports = showUniversityByIdController;
