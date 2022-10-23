const University = require('../models/University')

async function listUniversitiesController(req, res) {
    const country = req.query.country;

    try {
        if (!country) {
            return res.status(400).json({ message: "It's necessary to informe the country to this search." })
        }

        const universities = await University.find({ country })

        if (universities.length === 0) {
            return res.status(400).json({ message: "Country not found." })
        }

        res.status(200).json({
            universities: universities.length,
            more_infor: `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`,
            list_universities: universities.map((university) => {
                return {
                    id: university._id,
                    name: university.name,
                    country: university.country,
                    state_province: university.state_province
                }
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}

module.exports = listUniversitiesController;
