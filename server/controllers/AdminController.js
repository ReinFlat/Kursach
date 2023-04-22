const ApiError = require('../error/ApiError');
const db = require("../db")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AdminController {

    async getCompany(req, res) {
        const company = await db.query(`SELECT * FROM companys`)
        return res.json(company.rows)
    }
    async createCompany(req, res) {
        const {company_name, telephone, inn} = req.body
        const company = await db.query('CALL add_company($1, $2, $3)', [company_name, telephone, inn])
        return res.json(company.rows)
    }
    async removeCompany(req, res) {
        const {id} = req.params
        const company = await db.query('CALL remove_company($1)', [id])
        return res.json(company.rows)
    }
    async updateCompany(req, res) {
        const {id, company_name, telephone, inn} = req.body
        console.log({id, company_name, telephone, inn})
        const company = await db.query('CALL update_company($1, $2, $3, $4)', [id, company_name, telephone, inn])
        return res.json(company.rows)
    }


    async getPosition(req, res) {
        const position = await db.query(`SELECT * FROM positions`)
        return res.json(position.rows)
    }
    async createPosition(req, res) {
        const {name_position, department_id} = req.body
        console.log({name_position, department_id})
        const position = await db.query('INSERT INTO positions (name_position, department_id) VALUES ($1, $2) RETURNING *', [name_position, department_id])
        return res.json(position.rows)
    }
    
    async getDepartment(req, res) {
        const department = await db.query(`SELECT * FROM departments`)
        return res.json(department.rows)
    }
    async createDepartment(req, res) {
        const {name} = req.body
        console.log({name})
        const department = await db.query('INSERT INTO departments (name) VALUES ($1) RETURNING *', [name])
        return res.json(department.rows)
    }

    
    async getStudents(req, res) {
        const {id} = req.params
        const students = await db.query(`SELECT * FROM Get_companyStudents(${id})`)
        return res.json(students.rows)
    }
    async getEmails(req, res) {
        const email = await db.query(`SELECT email FROM users`)
        return res.json(email.rows)
    }
    async getIds(req, res) {
        const id = await db.query(`SELECT id FROM users`)
        return res.json(id.rows)
    }


    async createStudent(req, res) {
        const {id, email, password, role, birth_date, obrazovanie, fio, company_id, position_id, address, coords} = req.body
        console.log({id, email, password, role, birth_date, obrazovanie, fio, company_id, position_id, address, coords})
        const hashPassword = await bcrypt.hash(password, 5)
        const student = await db.query('CALL add_student($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
        [id, email, hashPassword, role, birth_date, obrazovanie, fio, company_id, position_id, address, coords])
        return res.json(student.rows)
    }
    async removeStudent(req, res) {
        const {id} = req.params
        const student = await db.query('CALL remove_student($1)', [id])
        return res.json(student.rows)
    }
    async updateStudent(req, res) {
        const {user_id, birth_date, obrazovanie, fio, position_id} = req.body
        console.log({user_id, birth_date, obrazovanie, fio, position_id})
        const student = await db.query('CALL update_student($1, $2, $3, $4, $5)', [user_id, birth_date, obrazovanie, fio, position_id])
        return res.json(student.rows)
    }


    async getStats(req, res) {
        const stats = await db.query(`SELECT * FROM get_stats()`)
        return res.json(stats.rows)
    }

    async getTraffic(req, res) {
        const {id} = req.params
        const traffic = await db.query(`SELECT get_traffic(${id})`)
        return res.json(traffic.rows)
    }

    async getAddresses(req, res) {
        const addresses = await db.query(`SELECT * FROM stud_addresses`)
        return res.json(addresses.rows)
    }
    async updateAddresses(req, res) {
        const {user_id, address, coords} = req.body
        const addresses = await db.query('CALL update_addresses($1, $2, $3)', [user_id, address, coords])
        return res.json(addresses.rows)
    }
    
}

module.exports = new AdminController