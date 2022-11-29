const {Exam} = require('../models/models')
const ApiError = require('../error/ApiError');

class ExamController {
    async create(req, res) {
        const {Mark, Date_Exam, Time_Exam} = req.body
        const exam = await Exam.create({Mark, Date_Exam, Time_Exam})
        return res.json(Exam)
    }

    async getAll(req, res) {
        const Exams = await Exam.findAll()
        return res.json(Exams)
    }

}

module.exports = new ExamController()