const { populateUniversitiesDatabase } = require('../../../script/populateUniversitiesDatabase');
const University = require('../models/University')

async function populateUniversitiesController(req, res) {
    try {
        const universities = await University.find()

        while (universities.length === 0) {
            await populateUniversitiesDatabase()

            return res.status(201).json({
                message: "The database was populated succesfully!"
            })
        }

        return res.status(200).json({
            message: "This request can't be executed again."
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = populateUniversitiesController;