import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._disciplines = [
            {idDis: 1, name: "Бурение очка"},
            {idDis: 2, name: "Безопасность анальных процессов"}
        ]
        this._exams = [
            {idDis: 1, userNumber: 5, mark: 76, date: "09/20/2023", time: "15:00"},
            {idDis: 1, userNumber: 4, mark: 91, date: "09/25/2023", time: "15:00"}
        ]
        this._lessons = [
            {idDis: 1, count: 10, date: "09/25/2023", time: "9:45-11:20", idLes: 1, nameT: "Михал Палыч"},
            {idDis: 1, count: 15, date: "10/13/2023", time: "15:30-17:05", idLes: 1, nameT: "Михал Палыч"},
            {idDis: 1, count: 20, date: "11/22/2023", time: "11:30-13:05", idLes: 1, nameT: "Михал Палыч"}
        ]
        this._teachers = [
            {idDis: 1, name: "Михал Палыч"}
        ]
        this._selectedLesson = {}
        makeAutoObservable(this)
    }

    setDisciplines(disciplines) {
        this._disciplines = disciplines
    }
    setExams(exams) {
        this._exams = exams
    }
    setLessons(lessons) {
        this._lessons = lessons
    }

    setTeachers(teachers) {
        this._teachers = teachers
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}