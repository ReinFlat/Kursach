const Router = require('express')
const router = new Router()
const UserRouter = require('./UserRouter')
const TeacherRouter = require('./TeacherRouter')
const LessonRouter = require('./LessonRouter')
const StudentRouter = require('./StudentRouter')
const ExamRouter = require('./ExamRouter')


router.use('/user', UserRouter)
router.use('/teacher', TeacherRouter)
router.use('/lesson', LessonRouter)
router.use('/student', StudentRouter)
router.use('/exam', ExamRouter)



module.exports = router