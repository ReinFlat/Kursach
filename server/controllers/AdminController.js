const ApiError = require('../error/ApiError');
const db = require("../db")

class AdminController {

    async getCompany(req, res) {
        const company = await db.query(`SELECT * FROM companys`)
        return res.json(company.rows)
    }

    async getStudents(req, res) {
        const {id} = req.params
        const students = await db.query(`SELECT * FROM students
                                        WHERE students.company_id = ${id}`)
        return res.json(students.rows)
    }

    async getCountPassed(req, res) {
        const {id} = req.params
        const count = await db.query(`SELECT COUNT(*) FROM students
                                        JOIN exams ON students.user_id = exams.user_id
                                        JOIN marks ON exams.exam_id = marks.exam_id
                                        WHERE students.company_id = ${id}`)
        return res.json(count.rows)
    }

    async getAverageMark(req, res) {
        const {id} = req.params
        const averageMark = await db.query(`SELECT ROUND(AVG(marks.mark)) FROM students
                                            JOIN exams ON students.user_id = exams.user_id
                                            JOIN marks ON exams.exam_id = marks.exam_id
                                            WHERE students.company_id = ${id}`)
        return res.json(averageMark.rows)
    }

    async getTraffic(req, res) {
        const {id} = req.params
        const traffic = await db.query(`SELECT ROUND
                                        ((SELECT COUNT(*) FROM students 
                                        JOIN baskets ON students.user_id = baskets.user_id                                        
                                        WHERE students.company_id = ${id}) 
                                        ::float/
                                        (SELECT COUNT(*)
                                        *(SELECT COUNT(*) FROM students
                                        WHERE students.company_id = ${id}) 
                                        FROM lessons)
                                        *100) `)
        return res.json(traffic.rows)
    }
}

module.exports = new AdminController