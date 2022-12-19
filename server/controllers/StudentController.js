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

    async getOne(req, res) {
        const {id} = req.params
        const student = await db.query(`SELECT * FROM students
                                        JOIN companys ON students.company_id = companys.id
                                        JOIN positions ON students.position_id = positions.id
                                        JOIN departments ON positions.department_id = departments.id
                                        WHERE user_id = ${id}`)
        return res.json(student.rows)
    }

    async getCountLesson(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT COUNT(*) FROM baskets WHERE baskets.user_id = ${id}`)
        return res.json(count.rows)
    }

    async getExam(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT * FROM exams 
                                    JOIN marks ON exams.exam_id = marks.exam_id
                                    JOIN disciplines ON exams.discipline_id = disciplines.id
                                    JOIN teachers ON exams.discipline_id = teachers.discipline_id
                                    WHERE exams.user_id = ${id}`)
        return res.json(count.rows)
    }

    async getSigned(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT * FROM baskets 
                                    JOIN lessons ON baskets.lesson_id = lessons.lesson_id
                                    JOIN disciplines ON lessons.discipline_id = disciplines.id
                                    JOIN teachers ON lessons.discipline_id = teachers.discipline_id
                                    WHERE baskets.user_id = ${id}`)
        return res.json(count.rows)
    }

}

module.exports = new StudentController