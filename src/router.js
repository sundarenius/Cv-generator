import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Starter from './components/starter.vue'
import Edit from './components/my-resume.vue'
import Checkout from './components/checkout.vue'
// import AuthGuard from './auth-guard.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/build', name: 'Builder', component: Starter },
    { path: '/my-resume', name: 'Edit', component: Edit },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') }
  ]
})
