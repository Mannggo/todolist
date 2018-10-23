import fetch from '../config/fetch'

// 登录
export const login = (username, password) => fetch('/login',{
    username, password
}, 'POST')