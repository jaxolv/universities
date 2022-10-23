const University = require('../models/University')

async function listUniversitiesController(req, res) {
    const country = req.query.country;
    const id = req.params.id

    try {
        const universities = await University.find()

        if (country) {
            const universitiesByCountry = universities.filter((university) => university.country === country)

            if (universitiesByCountry.length === 0) {
                return res.status(400).json({ message: "Country not found." })
            }

            res.status(200).json({
                universities: universitiesByCountry.length,
                more_infor: `http://universities.hipolabs.com/search?country=${country.toLowerCase()}`,
                list_universities: universitiesByCountry.map((university) => {
                    return {
                        id: university._id,
                        name: university.name,
                        country: university.country,
                        state_province: university.state_province
                    }
                })
            })
        }

        if (id) {
            try {
                const universityFounded = await University.findById(id)

                res.status(200).json(universityFounded)
            } catch (error) {
                res.status(500).json({ error: error.message })
            }
        }

        res.status(200).json({
            universities: universities.length,
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
