const Router = require('express')
const DisciplineController = require('../controllers/DisciplineController')
const { Discipline } = require('../models/models')
const router = new Router()



router.post('/DisciplineCreate', DisciplineController.create)
router.get('/DisciplineGet', DisciplineController.getAll)


module.exports = router