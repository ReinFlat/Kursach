const Router = require('express')
const AdminController = require('../controllers/AdminController')
const router = new Router()

router.get('/company', AdminController.getCompany)
router.get('/count/:id', AdminController.getCountPassed)
router.get('/average/:id', AdminController.getAverageMark)
router.get('/traffic/:id', AdminController.getTraffic)
router.get('/students/:id', AdminController.getStudents)

module.exports = router