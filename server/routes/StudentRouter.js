const Router = require('express')
const StudentController = require('../controllers/StudentController')
const router = new Router()



router.post('/StudCreate', StudentController.create)
router.post('/', StudentController.signOne)


module.exports = router