const Router = require('express')
const { Discipline, Lesson, Prepod, Sotrudnik } = require('../models/models')
const router = new Router()
const DisciplineRouter = require('./DisciplineRouter')
const ExamRouter = require('./ExamRouter')
const LessonRouter = require('./LessonRouter')
const PrepodRouter = require('./PrepodRouter')
const SotrudnikRouter = require('./SotrudnikRouter')
const UserRouter = require('./UserRouter')


router.use('/user', UserRouter)
router.use('/Exam', ExamRouter)
router.use('/Discipline', DisciplineRouter)
router.use('/Lesson', LessonRouter)
router.use('/Prepod', PrepodRouter)
router.use('/Sotrudnik', SotrudnikRouter)


module.exports = router