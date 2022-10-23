const router = require('express').Router()
const University = require('../models/University');
const { populateUniversitiesDatabase, depopulateUniversities } = require('../../script/populateDatabase')

// endpoints
router.post('/populate', (req, res) => {
    try {
        populateUniversitiesDatabase()

        res.status(201).json({
            message: "All universities were succesfully merged!"
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {

    const { domains, country, state_province, web_pages, name, alpha_two_code } = req.body
    const university = {
        domains,
        country,
        state_province,
        web_pages,
        name,
        alpha_two_code: alpha_two_code.toUpperCase()
    }

    try {

        // validations
        if (!domains) { return res.status(406).json({ message: "The field \'domain\' has to be informed." }) }
        if (!country) { return res.status(406).json({ message: "The field \'country\' has to be informed." }) }
        if (!web_pages) { return res.status(406).json({ message: "The field \'web_pages\' has to be informed." }) }
        if (!name) { return res.status(406).json({ message: "The field \'name\' has to be informed." }) }
        if (!alpha_two_code || alpha_two_code.length !== 2) { return res.status(406).json({ message: "The field \'alpha_two_code\' has to be informed and no more than two characters." }) }

        const foundedUniversity = await University.findOne({
            name: name, country: country, state_province: state_province
        })

        if (foundedUniversity) {
            return res.status(409).json({ message: "This university it's already on our database." })
        }

        await University.create(university)
        res.status(201).json({ success: university })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/', async (req, res) => {
    const country = req.query.country;

    try {
        const universities = await University.find()

        if (country) {
            const universitiesByCountry = universities.filter((university) => university.country === country)

            return res.status(200).json(universitiesByCountry)
        }

        res.status(200).json(universities.map((university) => {
            return {
                id: university._id,
                name: university.name,
                country: university.country,
                state_province: university.state_province
            }
        }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const university = await University.findById(id)

        res.status(200).json(university)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const university = await University.findById(id)

        university.deleteOne()

        res.status(200).json({
            message: "University deleted succesfully.",
            data: university
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const university = await University.findById(id)

        res.status(200).json({
            message: "University deleted succesfully.",
            data: university
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/depopulate', async (req, res) => {
    try {
        depopulateUniversities()

        res.status(200).json({
            message: "All universities deleted succesfully."
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router;