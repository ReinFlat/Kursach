const ApiError = require('../error/ApiError');
const db = require("../db")

class DisciplineController {
    async create(req, res) {
        const {id, date_discipline, time_discipline, discipline_id} = req.body
        const disciplines = await db.query('INSERT INTO disciplines (id, date_discipline, time_discipline, discipline_id) values($1, $2, $3, $4) RETURNING *', [id, date_discipline, time_discipline, discipline_id])
        return res.json(disciplines.rows)
    }

    async getAll(req, res) {
        const disciplines = await db.query('SELECT * FROM disciplines')
        return res.json(disciplines.rows)
    }

}

module.exports = new DisciplineController()