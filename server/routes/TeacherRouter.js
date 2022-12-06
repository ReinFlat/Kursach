const Router = require('express')
const TeacherController = require('../controllers/TeacherController')
const router = new Router()



router.post('/TeacherCreate', TeacherController.create)
router.get('/TeacherGet', TeacherController.getAll)


module.exports = router