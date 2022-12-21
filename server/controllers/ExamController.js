const ApiError = require('../error/ApiError');
const db = require("../db")

class ExamController {
    async create(req, res, next) {
        const {date_exam, time_exam, user_id, discipline_id} = req.body
        let date = new Date()
        let exam_date = new Date(date_exam)
        if ( time_exam === "") {
            console.log('Не выбрано время экзамена')
            return next(ApiError.badRequest('Не выбрано время экзамена'))
        }
        if ( date.getTime() > exam_date.getTime()) {
            console.log('Нельзя поставить экзамен задним числом')
            return next(ApiError.badRequest('Нельзя поставить экзамен задним числом'))
        }
        const haveexam = await db.query('SELECT * FROM exams WHERE user_id = $1 AND discipline_id = $2', [user_id, discipline_id])
        if (haveexam.rowCount !== 0 ) {
            console.log('Этому студенту уже проставлен экзамен')
            return next(ApiError.badRequest('Этому студенту уже проставлен экзамен'))
        }
        const exams = await db.query('INSERT INTO exams (date_exam, time_exam, user_id, discipline_id) values($1, $2, $3, $4) RETURNING *', [date_exam, time_exam, user_id, discipline_id])
        return res.json(exams.rows)
    }

    async getExam(req, res) {
        const count = await db.query(`SELECT * FROM exams 
                                    JOIN disciplines ON exams.discipline_id = disciplines.id
                                    JOIN students ON exams.user_id = students.user_id`)
        return res.json(count.rows)
    }

    async getMark(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT * FROM exams 
                                    JOIN disciplines ON exams.discipline_id = disciplines.id
                                    JOIN marks ON exams.exam_id = marks.exam_id
                                    WHERE exams.user_id = ${id}`)
        return res.json(count.rows)
    }
}

module.exports = new ExamController