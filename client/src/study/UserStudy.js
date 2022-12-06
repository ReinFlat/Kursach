import {makeAutoObservable} from "mobx"

export default class UserStudy {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setUser(user) {
        this._user = user
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    
    get user() {
        return this._user
    }

    get isAuth() {
        return this._isAuth
    }
}