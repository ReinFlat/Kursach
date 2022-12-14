const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.post('/auth', authMiddleware, UserController.check)
router.post('/getAll', UserController.getAll)


module.exports = router