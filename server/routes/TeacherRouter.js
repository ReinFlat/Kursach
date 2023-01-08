const Router = require('express')
const TeacherController = require('../controllers/TeacherController')
const router = new Router()

router.get('/:id', TeacherController.getOne)
router.get('/count/:id', TeacherController.getCount)
router.post('/removeLesson/:id', TeacherController.removeLesson)
router.post('/removeExam/:id', TeacherController.removeExam)
router.post('/addMark', TeacherController.addMark)
router.get('/getmark/:id', TeacherController.getMark)

module.exports = router