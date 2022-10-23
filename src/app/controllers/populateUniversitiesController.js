const { populateUniversitiesDatabase } = require('../../../script/populateUniversitiesDatabase');

let populated = false

async function populateUniversitiesController(req, res) {
    try {
        if (!populated) {
            await populateUniversitiesDatabase()

            populated = true

            return res.status(201).json({
                message: "All universities were succesfully merged!"
            })
        }

        return res.status(200).json( {
            message: "Universities already merged."
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = populateUniversitiesController;