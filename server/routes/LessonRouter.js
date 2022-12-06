const Router = require('express')
const LessonController = require('../controllers/LessonController')
const router = new Router()



router.post('/LessonCreate', LessonController.create)
router.get('/LessonGet', LessonController.getAll)


module.exports = router