import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import createRouter from './router/router.js'
Vue.use(VueRouter)
Vue.use(VueResource)
const router = createRouter()
Vue.config.productionTip = false
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
