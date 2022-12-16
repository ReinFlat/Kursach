const Router = require('express')
const TeacherController = require('../controllers/TeacherController')
const router = new Router()



router.post('/', TeacherController.create)
router.get('/:id', TeacherController.getOne)


module.exports = router