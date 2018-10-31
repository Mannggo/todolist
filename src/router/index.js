import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Index from '@/pages/index/Index'
import Settings from '@/pages/settings/Settings'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings,
            meta: {
                title: '设置'
            }
        },
        {
            path: '/login.pp',
            name: 'Login',
            component: Login,
            meta: {
                title: '登录'
            }
        }
    ]
})
