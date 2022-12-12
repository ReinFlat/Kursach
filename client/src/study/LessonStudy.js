import {makeAutoObservable} from "mobx";

export default class LessonStudy {
    constructor() {
        this._disciplines = []
        this._lessons = []
        this._teachers = []
        makeAutoObservable(this)
    }

    setDisciplines(disciplines) {
        this._disciplines = disciplines
    }
    setLessons(lessons) {
        this._lessons = lessons
    }
    setTeachers(teachers) {
        this._teachers = teachers
    }

    get disciplines() {
        return this._disciplines
    }
    get lessons() {
        return this._lessons
    }
    get teachers() {
        return this._teachers
    }
}