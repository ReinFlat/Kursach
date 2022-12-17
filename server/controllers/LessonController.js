const ApiError = require('../error/ApiError');
const db = require("../db")

class LessonController {

    async create(req, res) {
        const {id, date_lesson, time_lesson, discipline_id} = req.body
        const lessons = await db.query('INSERT INTO lessons (date_lesson, time_lesson, discipline_id) values($1, $2, $3) RETURNING *', [date_lesson, time_lesson, discipline_id])
        return res.json(lessons.rows)
    }

    async getAll(req, res) {        
        const lessons = await db.query('SELECT * FROM lessons JOIN disciplines ON lessons.discipline_id = disciplines.id JOIN teachers ON lessons.discipline_id = teachers.discipline_id')
        return res.json(lessons.rows)
    }

}

module.exports = new LessonController