const Router = require('express')
const LessonController = require('../controllers/LessonController')
const router = new Router()



router.post('/', LessonController.create)
router.get('/', LessonController.getAll)


module.exports = router