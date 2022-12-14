const router = require('express').Router()
const swagger = require('swagger-ui-express')
const swaggerJson = require('../docs/swagger.json')

const populateUniversitiesController = require('../app/controllers/populateUniversitiesController');
router.post('/populate', (req, res) => {
    populateUniversitiesController(req, res)
});

router.use('/docs', swagger.serve, swagger.setup(swaggerJson))

const listAllUniversitiesController = require('../app/controllers/listAllUniversitiesController');
const showUniversityByIdController = require('../app/controllers/showUniversityByIdController');
const createUniversityController = require('../app/controllers/createUniversityController');
const updateUniversityController = require('../app/controllers/updateUniversityController');
const deleteUniversityController = require('../app/controllers/deleteUniversityController');

router.post('/', (req, res) => {
    createUniversityController(req, res)
});

router.get('/', (req, res) => {
    listAllUniversitiesController(req, res)
});
router.get('/:id', (req, res) => {
    showUniversityByIdController(req, res)
});

router.put('/:id', (req, res) => {
    updateUniversityController(req, res)
});

router.delete('/:id', (req, res) => {
    deleteUniversityController(req, res)
});


module.exports = router;
