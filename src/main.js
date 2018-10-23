// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 饿了么UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 路由标题插件
import VueWechatTitle from 'vue-wechat-title'
// 状态管理插件
import Vuex from 'vuex'
Vue.use(VueWechatTitle)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    logined: true
  },
  mutations: {
    LOGIN_STATE (state) {
      state.logined = !state.logined
    }
  }
})
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

