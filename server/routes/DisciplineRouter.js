const Router = require('express')
const DisciplineController = require('../controllers/DisciplineController')
const { Discipline } = require('../models/models')
const router = new Router()



router.post('/', DisciplineController.create)
router.get('/', DisciplineController.getAll)


module.exports = router