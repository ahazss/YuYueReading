// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/element-variables.scss'
import './assets/font/font.css'
import store from './store'
import echarts from 'echarts'
import Meta from 'vue-meta'

var axios = require('axios')
// 修改此地址时需要修改config/index.js内的proxyTable的地址
axios.defaults.baseURL = 'http://49.234.81.69:8081/api'
//全局注册
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(Meta)

const {
  token,
  userId,
  phone,
  name,
  avatar,
  status,
} = window.localStorage
store.commit('profile/setUser', {
  token,
  userId,
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
  template: '<App/>',
  metaInfo: {
        title: 'JoyRead',      
        meta: [
          { charset: 'utf-8' },        
          { name: 'referrer',
            content: 'never' }      
          ]    
  },
})
