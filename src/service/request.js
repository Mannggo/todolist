import fetch from '../config/fetch'

// 登录
export const login = (username, password) => fetch('/auth/login',{
    username, password
}, 'POST')


// 任务相关 ↓↓
export const taskList = (pageIndex, pageSize, queryType, queryValue) => fetch('/task/list',{
    pageIndex, pageSize, queryType, queryValue
}, 'GET')

export const insertTask = (priority, content, date) => fetch('/task/insert',{
    priority, content,date
}, 'POST')