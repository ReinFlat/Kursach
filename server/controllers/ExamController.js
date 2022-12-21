const ApiError = require('../error/ApiError');
const db = require("../db")

class ExamController {
    async create(req, res, next) {
        const {date_exam, time_exam, user_id, discipline_id} = req.body
        let date = new Date()
        let exam_date = new Date(date_exam)
        const { spawnSync } = require('child_process');
        if ( time_exam === "") {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('Не выбрано время экзамена');
            `]);
            return next(ApiError.badRequest('Не выбрано время экзамена'))
        }
        if ( date.getTime() > exam_date.getTime()) {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('Нельзя поставить экзамен задним числом');
            `]);
            return next(ApiError.badRequest('Нельзя поставить экзамен задним числом'))
        }
        const haveexam = await db.query('SELECT * FROM exams WHERE user_id = $1 AND discipline_id = $2', [user_id, discipline_id])
        if (haveexam.rowCount !== 0 ) {
            spawnSync("powershell.exe", [`
            Add-Type -AssemblyName PresentationCore,PresentationFramework;
            [System.Windows.MessageBox]::Show('Этому студенту уже проставлен экзамен');
            `]);
            return next(ApiError.badRequest('Этому студенту уже проставлен экзамен'))
        }
        const exams = await db.query('CALL add_exam($1, $2, $3, $4)', [date_exam, time_exam, user_id, discipline_id])
        return res.json(exams.rows)
    }

    async getExam(req, res) {
        const count = await db.query(`SELECT * FROM get_yourexams()`)
        return res.json(count.rows)
    }

    async getMark(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT * FROM get_yourmark(${id})`)
        return res.json(count.rows)
    }
}

module.exports = new ExamController