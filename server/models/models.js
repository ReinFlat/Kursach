const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    NumUser: {type: DataTypes.INTEGER, unique: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role: {type: DataTypes.STRING, defaultValue: 'Сотрудник'}
})

const Korzina = sequelize.define('korzina', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//const korz_disc = sequelize.define('korz_disc', {
//    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//})
const Sotrudnik = sequelize.define('Sotrudnik', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Birth_date: {type: DataTypes.DATE, allowNull: false},
    Staj: {type: DataTypes.INTEGER},
    Obrazovanie: {type: DataTypes.STRING},
    FIO: {type: DataTypes.STRING, allowNull: false},
    NumUser: {type: DataTypes.INTEGER, unique: true},
})

const Predpriyatie = sequelize.define('Predpriyatie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, allowNull: false},
    Telephone: {type: DataTypes.INTEGER, allowNull: false},
    INN: {type: DataTypes.INTEGER, allowNull: false},
})

const Personal = sequelize.define('Personal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Telephone: {type: DataTypes.INTEGER, allowNull: false},
    Passport: {type: DataTypes.INTEGER, allowNull: false},
})

const Doljnost = sequelize.define('Doljnost', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name_dolj: {type: DataTypes.STRING, allowNull: false},
})

const Podrazdelenie = sequelize.define('Podrazdelenie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, allowNull: false},
})

const Prepod = sequelize.define('Prepod', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, allowNull: false},
    NumUser: {type: DataTypes.INTEGER, unique: true},
})

const Discipline = sequelize.define('Discipline', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Disc_name: {type: DataTypes.STRING, allowNull: false},
})

const Lesson = sequelize.define('Lesson', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Lesson_count: {type: DataTypes.INTEGER, allowNull: false},
    Date_lesson: {type: DataTypes.DATE, allowNull: false},
    Time_lesson: {type: DataTypes.TIME, allowNull: false},
})

const Exam = sequelize.define('Exam', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Mark: {type: DataTypes.INTEGER},
    Date_exam: {type: DataTypes.DATE, allowNull: false},
    Time_exam: {type: DataTypes.TIME, allowNull: false},
})

const Sotr_disc = sequelize.define('Sotr_disc', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Sotrudnik.hasOne(User)
User.belongsTo(Sotrudnik)

Sotrudnik.hasMany(Doljnost)
Doljnost.belongsTo(Sotrudnik)

Podrazdelenie.hasMany(Doljnost)
Doljnost.belongsTo(Podrazdelenie)

Predpriyatie.hasMany(Sotrudnik)
Sotrudnik.belongsTo(Predpriyatie)

Sotrudnik.hasOne(Personal)
Personal.belongsTo(Sotrudnik)

Sotrudnik.hasOne(Korzina)
Korzina.belongsTo(Sotrudnik)

Korzina.hasOne(Lesson)
Lesson.belongsTo(Korzina)

//Korzina.hasOne(korz_disc)
//korz_disc.belongsTo(Korzina)

//korz_disc.hasMany(Discipline)
//Discipline.belongsTo(korz_disc)

Sotrudnik.hasMany(Sotr_disc)  
Sotr_disc.belongsTo(Sotrudnik)  

Sotr_disc.hasMany(Exam) 
Exam.belongsTo(Sotr_disc)  

Discipline.hasMany(Sotr_disc)  
Sotr_disc.belongsTo(Discipline)  

Discipline.hasMany(Lesson)
Lesson.belongsTo(Discipline)

Prepod.hasOne(Discipline)
Discipline.belongsTo(Prepod)

Role.hasMany(User)
User.belongsTo(Role)

User.hasOne(Prepod)
Prepod.belongsTo(User)


module.exports = {
    User,
    Role,
    Korzina,
    Prepod,
    Exam,
    Lesson,
    Discipline,
    Predpriyatie,
    Doljnost,
    Sotr_disc,
    Personal,
    Podrazdelenie,
    Sotrudnik
}