const deleteUniversityService = require('../services/deleteUniversityService');

async function deleteUniversityController(req, res) {
    const id = req.params.id;

    try {
        const data = await deleteUniversityService(id);

        res.status(data.status).json(data.result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = deleteUniversityController;
