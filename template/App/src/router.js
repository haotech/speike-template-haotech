import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Home from './components/Hello.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: App },
  { path: '/home', component: Home }
]

export default new VueRouter({
  routes
})
