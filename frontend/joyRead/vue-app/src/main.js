// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/element-variables.scss'
import './assets/font/font.css'
import store from './store'

var axios = require('axios')
// 修改此地址时需要修改config/index.js内的proxyTable的地址
axios.defaults.baseURL = 'http://49.234.81.69:8081/api'
//全局注册
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

const {
  token,
  id,
  phone,
  name,
  avatar,
  status,
} = window.localStorage
store.commit('profile/setUser', {
  token,
  id,
  phone,
  name,
  avatar,
  status,
})

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
