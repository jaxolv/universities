const { populateUniversitiesDatabase } = require('../../../script/populateUniversitiesDatabase');

let populated = false

async function populateUniversitiesController(req, res) {
    try {
        while (!populated) {
            await populateUniversitiesDatabase()

            populated = true

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