const Router = require('express')
const router = new Router()
const UserController = require('../controllers/UserController')


router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', UserController.check)
router.get('/test', (req, res) => {
    res.json({message: 'ALL WORKING!!'})
})

module.exports = router