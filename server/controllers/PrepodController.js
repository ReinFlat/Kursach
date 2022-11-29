const {Prepod} = require('../models/models')
const ApiError = require('../error/ApiError');

class PrepodController {
    async create(req, res) {
        const {FIO, Num_User} = req.body
        const Prepod = await Prepod.create({FIO, Num_User})
        return res.json(Prepod)
    }

    async getAll(req, res) {
        const Prepods = await Prepod.findAll()
        return res.json(Prepods)
    }

}

module.exports = new PrepodController()