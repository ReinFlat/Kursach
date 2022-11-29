const Router = require('express')
const ExamController = require('../controllers/ExamController')
const router = new Router()



router.post('/', ExamController.create)
router.get('/', ExamController.getAll)


module.exports = router