const University = require('../models/University')

async function createUniversityController(req, res) {
    const {
        domains,
        country,
        state_province,
        web_pages,
        name,
        alpha_two_code
    } = req.body

    const university = {
        domains,
        country,
        state_province,
        web_pages,
        name,
        alpha_two_code: alpha_two_code.toUpperCase()
    }

    try {
        if (!domains) { return res.status(406).json({ message: "The field \'domain\' has to be informed." }) }

        if (!country) { return res.status(406).json({ message: "The field \'country\' has to be informed." }) }

        if (!web_pages) { return res.status(406).json({ message: "The field \'web_pages\' has to be informed." }) }

        if (!name) { return res.status(406).json({ message: "The field \'name\' has to be informed." }) }

        if (!alpha_two_code || alpha_two_code.length !== 2) { return res.status(406).json({ message: "The field \'alpha_two_code\' has to be informed and no more than two characters." }) }

        const foundedUniversity = await University.findOne({
            name, country, state_province
        })

        if (foundedUniversity) {
            return res.status(409).json({ message: "This university it's already on our database." })
        }

        await University.create(university)
        res.status(201).json({ success: university })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = createUniversityController;