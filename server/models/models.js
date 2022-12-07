const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    userid: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'STUDENT'}
})


const Basket = sequelize.define('Basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

//const korz_disc = sequelize.define('korz_disc', {
//    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//})
const Student = sequelize.define('Student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Birth_date: {type: DataTypes.DATE, allowNull: false},
    Staj: {type: DataTypes.INTEGER},
    Obrazovanie: {type: DataTypes.STRING},
    FIO: {type: DataTypes.STRING, allowNull: false},
})

const Company = sequelize.define('Company', {
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

const Position = sequelize.define('Position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name_dolj: {type: DataTypes.STRING, allowNull: false},
})

const Department = sequelize.define('Department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, allowNull: false},
})

const Teacher = sequelize.define('Teacher', {
    userid: {type: DataTypes.INTEGER, primaryKey: true},
    FIO: {type: DataTypes.STRING, allowNull: false},
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

User.hasOne(Student)
Student.belongsTo(User)

Student.hasMany(Position)
Position.belongsTo(Student)

Department.hasMany(Position)
Position.belongsTo(Department)

Company.hasMany(Student)
Student.belongsTo(Company)

Student.hasOne(Personal)
Personal.belongsTo(Student)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(Lesson)
Lesson.belongsTo(Basket)

//Basket.hasOne(korz_disc)
//korz_disc.belongsTo(Basket)

//korz_disc.hasMany(Discipline)
//Discipline.belongsTo(korz_disc)

Student.hasMany(Sotr_disc)  
Sotr_disc.belongsTo(Student)  

Sotr_disc.hasMany(Exam) 
Exam.belongsTo(Sotr_disc)  

Discipline.hasMany(Sotr_disc)  
Sotr_disc.belongsTo(Discipline)  

Discipline.hasMany(Lesson)
Lesson.belongsTo(Discipline)

Discipline.hasOne(Teacher)
Teacher.belongsTo(Discipline)

User.hasOne(Teacher)
Teacher.belongsTo(User)


module.exports = {
    User,
    Basket,
    Teacher,
    Exam,
    Lesson,
    Discipline,
    Company,
    Position,
    Sotr_disc,
    Personal,
    Department,
    Student
}