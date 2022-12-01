const {Sotrudnik} = require('../models/models')
const ApiError = require('../error/ApiError');

class SotrudnikController {
    async create(req, res) {
        const {Birth_date, Staj, Obrazovanie, FIO} = req.body
        const Sotrudnik = await Sotrudnik.create({Birth_date, Staj, Obrazovanie, FIO})
        return res.json(Sotrudnik)
    }

    async getAll(req, res) {
        const Sotrudniks = await Sotrudnik.findAll()
        return res.json(Sotrudniks)
    }

}

module.exports = new SotrudnikController()