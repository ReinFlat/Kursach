const ApiError = require('../error/ApiError');
const db = require("../db")

class AdminController {

    async getCompany(req, res) {
        const company = await db.query(`SELECT * FROM companys`)
        return res.json(company.rows)
    }

    async getStudents(req, res) {
        const {id} = req.params
        const students = await db.query(`SELECT * FROM Get_companyStudents(${id})`)
        return res.json(students.rows)
    }

    async getCountPassed(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT get_countpassed(${id})`)
        return res.json(count.rows)
    }

    async getAverageMark(req, res) {
        const {id} = req.params
        const averageMark = await db.query(`SELECT get_averagemark(${id})`)
        return res.json(averageMark.rows)
    }

    async getTraffic(req, res) {
        const {id} = req.params
        const traffic = await db.query(`SELECT get_traffic(${id})`)
        return res.json(traffic.rows)
    }
}

module.exports = new AdminController