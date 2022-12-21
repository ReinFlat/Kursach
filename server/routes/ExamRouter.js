const Router = require('express')
const ExamController = require('../controllers/ExamController')
const router = new Router()



router.post('/create', ExamController.create)
router.get('/:id', ExamController.getExam)
router.get('/mark/:id', ExamController.getMark)



module.exports = router