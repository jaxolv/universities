const University = require('../models/University')

async function updateUniversityController(req, res) {
    const id = req.params.id

    const { web_pages, name, domains } = req.body

    const university = { web_pages, name, domains }

    try {
        await University.findByIdAndUpdate({
            _id: id
        }, university)

        res.status(200).json(university)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = updateUniversityController;
