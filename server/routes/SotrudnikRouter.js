const Router = require('express')
const SotrudnikController = require('../controllers/SotrudnikController')
const router = new Router()



router.post('/', SotrudnikController.create)
router.get('/', SotrudnikController.getAll)


module.exports = router