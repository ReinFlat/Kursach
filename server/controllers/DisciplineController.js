const ApiError = require('../error/ApiError');
const db = require("../db")

class DisciplineController {
    async create(req, res) {
        const {id, discipline_name} = req.body
        const disciplines = await db.query('INSERT INTO disciplines (id, discipline_name) values($1, $2) RETURNING *', [id, discipline_name])
        return res.json(disciplines.rows)
    }

    async getAll(req, res) {
        const {id} = req.body
        const disciplines = await db.query(`SELECT * FROM disciplines WHERE ${id} = id`)
        return res.json(disciplines.rows)
    }

}

module.exports = new DisciplineController()