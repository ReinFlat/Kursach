const Router = require('express')
const { User, Exam, Discipline, Lesson, Teacher, Student } = require('../models/models')
const router = new Router()
const DisciplineRouter = require('./DisciplineRouter')
const ExamRouter = require('./ExamRouter')
const LessonRouter = require('./LessonRouter')
const TeacherRouter = require('./TeacherRouter')
const StudentRouter = require('./StudentRouter')
const UserRouter = require('./UserRouter')


router.use('/user', UserRouter)
router.use('/Exam', ExamRouter)
router.use('/Discipline', DisciplineRouter)
router.use('/Lesson', LessonRouter)
router.use('/Teacher', TeacherRouter)
router.use('/Student', StudentRouter)


module.exports = router