const ApiError = require('../error/ApiError');
const db = require("../db")

class StudentController {

    async signOne(req, res, next) {
        const {lesson_id, user_id} = req.body
        const { spawnSync } = require('child_process');
        const haveone = await db.query('SELECT user_id::integer FROM baskets WHERE lesson_id = $1', [lesson_id])
        if (haveone.rowCount !== 0){
            for(let i=0; i!=haveone.rowCount; i++){
                if(haveone.rows[i].user_id === {user_id}.user_id){
                    spawnSync("powershell.exe", [`
                    Add-Type -AssemblyName PresentationCore,PresentationFramework;
                    [System.Windows.MessageBox]::Show('Вы уже записаны на это занятие');
                    `]);
                    return next(ApiError.badRequest('Вы уже записаны на это занятие'))
                }
            }
            
        }
        const basket = await db.query('CALL sign_lesson ($1, $2)', [lesson_id, user_id])
        return res.json(basket.rows)
    }

    async getOne(req, res) {
        const {id} = req.params
        const student = await db.query(`SELECT * FROM get_onestudent(${id})`)
        return res.json(student.rows)
    }

    async getCountLesson(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT get_countLessons(${id})`)
        return res.json(count.rows)
    }

    async getSigned(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT * FROM get_signedon(${id})`)
        return res.json(count.rows)
    }

    async getAll(req, res) {
        const allStudents = await db.query(`SELECT * FROM students`)
        return res.json(allStudents.rows)
    }

    async removeSign(req, res) {
        const {id} = req.params
        const sign = await db.query('CALL remove_sign($1)', [id])
        return res.json(sign.rows)
    }

}

module.exports = new StudentController