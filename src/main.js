// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import '@/assets/js/rem.js'
import '@/assets/css/base.css'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(Vant)
/* eslint-disable no-new */

//定义全局路由判断
// router.beforeEach((to, from, next) => {
  
  // let token = localStorage.getItem('mytoken')
  // if (token) {
  //   //如果已经登录成功，那么让你随便访问
  //   next()
  // } else {
  //   if (to.path !== '/login') {
  //     next({
  //       //如果没有登录，但你访问的是其他需要登录的页面，那么让你强制跳转到登录页面
  //       path: '/login'
  //     })
  //   } else {
  //     //如果没有登录，但你访问的是登录页面，那么不干涉你，让你访问
  //     next()
  //   }
  // }
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
