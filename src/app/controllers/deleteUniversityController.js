const deleteUniversityService = require('../services/deleteUniversityService');

async function deleteUniversityController(req, res) {
    const id = req.params.id;

    try {
        const university = await deleteUniversityService(id);

        res.status(200).json(university);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = deleteUniversityController;
