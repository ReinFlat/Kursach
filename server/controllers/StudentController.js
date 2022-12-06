const {Student} = require('../models/models')
const ApiError = require('../error/ApiError');

class StudentController {
    async create(req, res) {
        const {Birth_date, Staj, Obrazovanie, FIO} = req.body
        const student = await Student.create({Birth_date, Staj, Obrazovanie, FIO})
        return res.json(Student)
    }

    async getAll(req, res) {
        const students = await Student.findAll()
        return res.json(students)
    }

}

module.exports = new StudentController()