const ApiError = require('../error/ApiError');
const db = require("../db")

class StudentController {
    async create(req, res) {
        const {birth_date, obrazovanie, fio, user_id, company_id, position_id} = req.body
        const students = await db.query('INSERT INTO students (birth_date, obrazovanie, fio, user_id, company_id, position_id) values($1, $2, $3, $4, $5, $6) RETURNING *', [birth_date, obrazovanie, fio, user_id, company_id, position_id])
        return res.json(students.rows)
    }

    async getAll(req, res) {
        const students = await db.query('SELECT * FROM students')
        return res.json(students.rows)
    }

}

module.exports = new StudentController