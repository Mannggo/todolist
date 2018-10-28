import fetch from '../config/fetch'

// 登录
export const login = (username, password) => fetch('/auth/login',{
    username, password
}, 'POST')

export const taskList = (pageIndex, pageSize, queryType, queryValue) => fetch('/task/list',{
    pageIndex, pageSize, queryType, queryValue
}, 'GET')