const {Teacher} = require('../models/models')
const ApiError = require('../error/ApiError');

class TeacherController {
    async create(req, res) {
        const {FIO} = req.body
        const teacher = await Teacher.create({FIO})
        return res.json(Teacher)
    }

    async getAll(req, res) {
        const teachers = await Teacher.findAll()
        return res.json(teachers)
    }

}

module.exports = new TeacherController()