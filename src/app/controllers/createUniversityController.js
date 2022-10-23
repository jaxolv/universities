const createUniversityService = require('../services/createUniversityService')

async function createUniversityController(req, res) {
    const {
        domains,
        country,
        state_province,
        web_pages,
        name,
        alpha_two_code
    } = req.body

    try {
        const university = await createUniversityService(
            domains,
            country,
            state_province,
            web_pages,
            name,
            alpha_two_code
        )

        return res.status(201).json({ success: university })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createUniversityController;