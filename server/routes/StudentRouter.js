const Router = require('express')
const StudentController = require('../controllers/StudentController')
const router = new Router()

router.get('/:id', StudentController.getOne)
router.post('/', StudentController.signOne)
router.get('/count/:id', StudentController.getCountLesson)
router.get('/signed/:id', StudentController.getSigned)
router.get('/', StudentController.getAll)

module.exports = router