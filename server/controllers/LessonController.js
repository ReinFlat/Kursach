const {Lesson} = require('../models/models')
const ApiError = require('../error/ApiError');

class LessonController {
    async create(req, res) {
        const {Lesson_count, Date_lesson, Time_lesson} = req.body
        const Lesson = await Lesson.create({Lesson_count, Date_lesson, Time_lesson})
        return res.json(Lesson)
    }

    async getAll(req, res) {
        const Lessons = await Lesson.findAll()
        return res.json(Lessons)
    }

}

module.exports = new LessonController()