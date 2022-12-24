const ApiError = require('../error/ApiError');
const db = require("../db")

class TeacherController {

    async getOne(req, res) {
        const {id} = req.params
        const teachers = await db.query(`SELECT * FROM get_teacher(${id})`)
        return res.json(teachers.rows)
    }

    async getCount(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT get_countSigned(${id})`)
        return res.json(count.rows)
    }

    async removeLesson(req, res) {
        const {id} = req.params
        const lesson = await db.query('CALL remove_lesson($1)', [id])
        return res.json(lesson.rows)
    }

    async removeExam(req, res) {
        const {id} = req.params
        const exam = await db.query('CALL remove_exam($1)', [id])
        return res.json(exam.rows)
    }

}

module.exports = new TeacherController