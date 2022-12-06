const {Discipline} = require('../models/models')
const ApiError = require('../error/ApiError');

class DisciplineController {
    async create(req, res) {
        const {Disc_name} = req.body
        const discipline = await Discipline.create({Disc_name})
        return res.json(Discipline)
    }

    async getAll(req, res) {
        const disciplines = await Discipline.findAll()
        return res.json(disciplines)
    }

}

module.exports = new DisciplineController()