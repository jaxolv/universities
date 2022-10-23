const router = require('express').Router()

const populateUniversitiesController = require('../app/controllers/populateUniversitiesController')
router.post('/populate', (req, res) => {
    populateUniversitiesController(req, res)
})

const listUniversitiesController = require('../app/controllers/listUniversitiesController')
const createUniversityController = require('../app/controllers/createUniversityController')
const updateUniversityController = require('../app/controllers/updateUniversityController')
const deleteUniversityController = require('../app/controllers/deleteUniversityController')

router.post('/', (req, res) => {
    createUniversityController(req, res)
})

router.get('/', (req, res) => {
    listUniversitiesController(req, res)
})
router.get('/:id', (req, res) => {
    listUniversitiesController(req, res)
})

router.delete('/:id', (req, res) => {
    deleteUniversityController(req, res)
})

router.put('/:id', (req, res) => {
    updateUniversityController(req, res)
})

module.exports = router;
