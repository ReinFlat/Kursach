const Router = require('express')
const PrepodController = require('../controllers/PrepodController')
const router = new Router()



router.post('/PrepodCreate', PrepodController.create)
router.get('/PrepodGet', PrepodController.getAll)


module.exports = router