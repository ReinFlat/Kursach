const Router = require('express')
const StudentController = require('../controllers/StudentController')
const router = new Router()

router.post('/StudCreate', StudentController.create)
router.get('/:id', StudentController.getOne)
router.post('/', StudentController.signOne)
router.get('/count/:id', StudentController.getCountLesson)
router.get('/exam/:id', StudentController.getExam)
router.get('/signed/:id', StudentController.getSigned)

module.exports = router