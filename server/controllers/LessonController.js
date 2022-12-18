const ApiError = require('../error/ApiError');
const db = require("../db")

class LessonController {

    async create(req, res, next) {
        const {id, date_lesson, time_lesson, discipline_id} = req.body
        let date = new Date()
        let lesson_date = new Date(date_lesson)
        console.log(time_lesson)
        if ( time_lesson === "") {
            console.log('Не выбрано время занятия')
            return next(ApiError.badRequest('Не выбрано время занятия'))
        }
        if ( lesson_date.getDay() >= 6) {
            console.log('По субботам и воскресеньям занятий нет')
            return next(ApiError.badRequest('По субботам и воскресеньям занятий нет'))
        }
        if ( date.getTime() > lesson_date.getTime()) {
            console.log('Нельзя поставить занятие задним числом')
            return next(ApiError.badRequest('Нельзя поставить занятие задним числом'))
        }
        const havelesson = await db.query('SELECT date_lesson FROM lessons WHERE date_lesson = $1', [date_lesson])
        if (havelesson.rowCount !== 0 ) {
            console.log('Это время занято другим занятием')
            return next(ApiError.badRequest('Это время занято другим занятием'))
        }
        const deletelesson = await db.query('DELETE FROM lessons WHERE date_lesson < $1', [date])
        const lessons = await db.query('INSERT INTO lessons (date_lesson, time_lesson, discipline_id) values($1, $2, $3) RETURNING *', [date_lesson, time_lesson, discipline_id])
        return res.json(lessons.rows)
    }

    async getAll(req, res) {        
        const lessons = await db.query('SELECT * FROM lessons JOIN disciplines ON lessons.discipline_id = disciplines.id JOIN teachers ON lessons.discipline_id = teachers.discipline_id')
        return res.json(lessons.rows)
    }

}

module.exports = new LessonController