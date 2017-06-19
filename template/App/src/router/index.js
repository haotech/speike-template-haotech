import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../views/index'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/home', component: App }
]

export default new VueRouter({
  routes
})
