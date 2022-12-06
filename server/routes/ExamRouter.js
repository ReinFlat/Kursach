const Router = require('express')
const ExamController = require('../controllers/ExamController')
const router = new Router()



router.post('/ExamCreate', ExamController.create)
router.get('/ExamGet', ExamController.getAll)


module.exports = router