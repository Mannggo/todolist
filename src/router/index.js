import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Mindex from '@/pages/index/Mindex'
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
            path: '/index/m',
            name: 'Mindex',
            component: Mindex,
            meta: {
                title: '首页'
            }
        }
    ]
})
