const University = require('../models/University')

async function deleteUniversityController(req, res) {
    const id = req.params.id

    try {
        await University.findByIdAndDelete(id)

        res.status(200).json({
            message: "University deleted succesfully."
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteUniversityController;
