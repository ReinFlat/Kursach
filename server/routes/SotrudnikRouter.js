const Router = require('express')
const SotrudnikController = require('../controllers/SotrudnikController')
const router = new Router()



router.post('/SotrCreate', SotrudnikController.create)
router.get('/SotrGet', SotrudnikController.getAll)


module.exports = router