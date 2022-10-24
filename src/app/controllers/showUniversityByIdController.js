const showUniversityByIdService = require('../services/showUniversityByIdService')

async function showUniversityByIdController(req, res) {
    const id = req.params.id;

    try {
        const universityFounded = await showUniversityByIdService(id);

        return res.status(200).json(universityFounded);

    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
};

module.exports = showUniversityByIdController;
