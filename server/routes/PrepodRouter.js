const Router = require('express')
const PrepodController = require('../controllers/PrepodController')
const router = new Router()



router.post('/', PrepodController.create)
router.get('/', PrepodController.getAll)


module.exports = router