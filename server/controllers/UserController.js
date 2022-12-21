const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require("../db")


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}


class UserController {
    async registration(req, res, next) {
        const {id, email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await db.query('SELECT email FROM users WHERE email = $1', [email])
        console.log(candidate.rows)
        if (candidate.rowCount !== 0 ) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await db.query('INSERT INTO users (id, email, password, role) values($1, $2, $3, $4) RETURNING *', [id, email, hashPassword, role] )

        const token = generateJwt(id, email, role)
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await db.query('SELECT email FROM users WHERE email = $1', [email])
        if (user.rowCount == 0) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const db_pass = await db.query('SELECT password FROM users WHERE email = $1', [email])
        const hashPassword = await bcrypt.compareSync(password, db_pass.rows[0].password)
        if (!hashPassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const user_id = await db.query('SELECT id FROM users WHERE email = $1', [email])
        console.log(user_id)
        const role = await db.query('SELECT role FROM users WHERE email = $1', [email])
        console.log(role)
        const token = generateJwt(user_id.rows[0].id, email, role.rows[0].role)
        return res.json({token})
    }
    async check(req, res, next) {
        console.log(req.rows)
        console.log(res.rows)
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    
    async getAll(req, res) {
        const users = await db.query('SELECT * FROM users')
        return res.json(users)
    }
}

module.exports = new UserController