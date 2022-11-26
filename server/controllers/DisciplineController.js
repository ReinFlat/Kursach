const {Discipline} = require('../models/models')
const ApiError = require('../error/ApiError');

class DisciplineController {
    async create(req, res) {
        const {Disc_name} = req.body
        const discipline = await discipline.create({Disc_name})
        return res.json(discipline)
    }

    async getAll(req, res) {
        const disciplines = await discipline.findAll()
        return res.json(disciplines)
    }

}

module.exports = new DisciplineController()