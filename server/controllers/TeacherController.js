const ApiError = require('../error/ApiError');
const db = require("../db")

class TeacherController {

    async getOne(req, res) {
        const {id} = req.params
        const teachers = await db.query(`SELECT * FROM get_teacher(${id})`)
        return res.json(teachers.rows)
    }

    async getCount(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT get_countSigned(${id})`)
        return res.json(count.rows)
    }

}

module.exports = new TeacherController