const Router = require('express')
const StudentController = require('../controllers/StudentController')
const router = new Router()



router.post('/StudCreate', StudentController.create)
router.get('/StudGet', StudentController.getAll)


module.exports = router