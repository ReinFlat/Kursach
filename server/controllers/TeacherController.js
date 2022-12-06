const {Teacher} = require('../models/models')
const ApiError = require('../error/ApiError');

class TeacherController {
    async create(req, res) {
        const {FIO} = req.body
        const Teacher = await Teacher.create({FIO})
        return res.json(Teacher)
    }

    async getAll(req, res) {
        const Teachers = await Teacher.findAll()
        return res.json(Teachers)
    }

}

module.exports = new TeacherController()