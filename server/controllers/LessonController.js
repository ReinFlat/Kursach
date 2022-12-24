const ApiError = require('../error/ApiError');
const db = require("../db")

class LessonController {

    async create(req, res, next) {
        const {id, date_lesson, time_lesson, discipline_id} = req.body
        let date = new Date()
        let lesson_date = new Date(date_lesson)
        const { spawnSync } = require('child_process');
        if ( time_lesson === "") {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('Не выбрано время занятия');
            `]);
            return next(ApiError.badRequest('Не выбрано время занятия'))
        }
        if ( lesson_date.getDay() === 6 || lesson_date.getDay() === 0) {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('По субботам и воскресеньям занятий нет');
            `]);
            return next(ApiError.badRequest('По субботам и воскресеньям занятий нет'))
        }
        if ( date.getTime() > lesson_date.getTime()) {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('Нельзя поставить занятие задним числом');
            `]);
            return next(ApiError.badRequest('Нельзя поставить занятие задним числом'))
        }
        const lessons = await db.query('CALL add_lesson($1, $2, $3)', [date_lesson, time_lesson, discipline_id])
        return res.json(lessons.rows)
    }

    async getAll(req, res) {     
        let date = new Date()   
        const lessons = await db.query(`SELECT * FROM get_lessons($1)`,[date])
        return res.json(lessons.rows)
    }

}

module.exports = new LessonController