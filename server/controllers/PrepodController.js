const {Prepod} = require('../models/models')
const ApiError = require('../error/ApiError');

class PrepodController {
    async create(req, res) {
        const {FIO} = req.body
        const Prepod = await Prepod.create({FIO})
        return res.json(Prepod)
    }

    async getAll(req, res) {
        const Prepods = await Prepod.findAll()
        return res.json(Prepods)
    }

}

module.exports = new PrepodController()