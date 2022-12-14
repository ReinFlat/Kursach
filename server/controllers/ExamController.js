const ApiError = require('../error/ApiError');
const db = require("../db")

class ExamController {
    async create(req, res) {
        const {id, mark, date_exam, time_exam, sotr_disc} = req.body
        const exams = await db.query('INSERT INTO exams (id, mark, date_exam, time_exam, sotr_disc) values($1, $2, $3, $4, $5) RETURNING *', [id, mark, date_exam, time_exam, sotr_disc])
        return res.json(teacher.rows)
    }

    async getAll(req, res) {
        const teachers = await db.query('SELECT * FROM teachers')
        return res.json(teachers.rows)
    }

}

module.exports = new ExamController