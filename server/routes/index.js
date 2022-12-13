const Router = require('express')
const router = new Router()
const UserRouter = require('./UserRouter')
const TeacherRouter = require('./TeacherRouter')
const DisciplineRouter = require('./DisciplineRouter')
const LessonRouter = require('./LessonRouter')
const StudentRouter = require('./StudentRouter')


router.use('/user', UserRouter)
router.use('/teacher', TeacherRouter)
router.use('/discipline', DisciplineRouter)
router.use('/lesson', LessonRouter)
router.use('/student', StudentRouter)



module.exports = router