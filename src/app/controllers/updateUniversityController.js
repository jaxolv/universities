const updateUniversityService = require('../services/updateUniversityService');

async function updateUniversityController(req, res) {
    const id = req.params.id;

    const { web_pages, name, domains } = req.body;

    try {
        const data = await updateUniversityService(id, web_pages, name, domains);

        return res.status(data.status).json(data.result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
};

module.exports = updateUniversityController;
