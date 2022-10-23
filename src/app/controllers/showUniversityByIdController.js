const University = require('../models/University')

async function showUniversityByIdController(req, res) {
    const id = req.params.id

    try {
        const universityFounded = await University.findById(id)
        res.status(200).json(universityFounded)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = showUniversityByIdController;
