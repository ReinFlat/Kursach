const Router = require('express')
const AdminController = require('../controllers/AdminController')
const router = new Router()

router.get('/company', AdminController.getCompany)
router.get('/stats', AdminController.getStats)
router.get('/traffic/:id', AdminController.getTraffic)
router.get('/students/:id', AdminController.getStudents)
router.get('/emails', AdminController.getEmails)
router.get('/ids', AdminController.getIds)

router.get('/position', AdminController.getPosition)
router.post('/addposition', AdminController.createPosition)

router.get('/department', AdminController.getDepartment)
router.post('/adddepartment', AdminController.createDepartment)

router.post('/addcompany', AdminController.createCompany)
router.post('/removeCompany/:id', AdminController.removeCompany)
router.post('/updateCompany', AdminController.updateCompany)

router.post('/addstudent', AdminController.createStudent)
router.post('/removeStudent/:id', AdminController.removeStudent)
router.post('/updateStudent', AdminController.updateStudent)

module.exports = router