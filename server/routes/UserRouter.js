const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/check', UserController.login)
router.post('/getAll', UserController.login)


module.exports = router