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

export const deleteTask = (id) => fetch('/task/delete',{
    id
}, 'DELETE')

export const completeTask = (id) => fetch('/task/complete',{
    id
}, 'GET')

// 设置相关
export const getSettings = () => fetch('/settings/all',{}, 'GET')

export const updateSettings = (remindSwitch, remindEmail, remindDay, remindTime) => fetch('/settings/update',{
    remindSwitch, remindEmail, remindDay, remindTime
}, 'POST')


