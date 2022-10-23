const { populateUniversitiesDatabase } = require('../../../script/populateUniversitiesDatabase');

function populateUniversitiesController(req, res) {
    try {
        populateUniversitiesDatabase()

        res.status(201).json({
            message: "All universities were succesfully merged!"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = populateUniversitiesController;