const createUniversityService = require('../services/createUniversityService');

async function createUniversityController(req, res) {
    const {
        domains,
        country,
        state_province,
        web_pages,
        name,
        alpha_two_code
    } = req.body;

    try {
        const data = await createUniversityService(
            domains,
            country,
            state_province,
            web_pages,
            name,
            alpha_two_code
        );

        return res.status(data.status).json(data.result);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = createUniversityController;