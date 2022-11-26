const {Sotrudnik} = require('../models/models')
const ApiError = require('../error/ApiError');

class SotrudnikController {
    async create(req, res) {
        const {FIO, Num_User} = req.body
        const Sotrudnik = await Sotrudnik.create({FIO, Num_User})
        return res.json(Sotrudnik)
    }

    async getAll(req, res) {
        const Sotrudniks = await Sotrudnik.findAll()
        return res.json(Sotrudniks)
    }

}

module.exports = new SotrudnikController()