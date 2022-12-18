const ApiError = require('../error/ApiError');
const db = require("../db")

class StudentController {
    async create(req, res) {
        const {birth_date, obrazovanie, fio, user_id, company_id, position_id} = req.body
        const students = await db.query('INSERT INTO students (birth_date, obrazovanie, fio, user_id, company_id, position_id) values($1, $2, $3, $4, $5, $6) RETURNING *', [birth_date, obrazovanie, fio, user_id, company_id, position_id])
        return res.json(students.rows)
    }

    async signOne(req, res, next) {
        const {lesson_id, user_id} = req.body
        const haveone = await db.query('SELECT user_id FROM baskets WHERE lesson_id = $1', [lesson_id])
        if (haveone.rowCount !== 0){
            console.log('Вы уже записаны на это занятие')
            return next(ApiError.badRequest('Вы уже записаны на это занятие'))
        }
        const basket = await db.query('INSERT INTO baskets (lesson_id, user_id) values($1, $2)', [lesson_id, user_id])
        return res.json(basket.rows)
    }

}

module.exports = new StudentController