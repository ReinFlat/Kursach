const ApiError = require('../error/ApiError');
const db = require("../db")

class TeacherController {
    async create(req, res) {
        const {FIO, user_id, discipline_id} = req.body
        const teacher = await db.query('INSERT INTO teachers (FIO, user_id, discipline_id) values($1, $2, $3) RETURNING *', [FIO, user_id, discipline_id])
        return res.json(teacher.rows)
    }

    async getOne(req, res) {
        const {id} = req.params
        const teachers = await db.query(`SELECT * FROM teachers JOIN disciplines ON teachers.discipline_id = disciplines.id WHERE ${id} = teachers.user_id`)
        return res.json(teachers.rows)
    }

}

module.exports = new TeacherController