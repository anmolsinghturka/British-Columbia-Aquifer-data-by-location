import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'

Vue.use(VueRouter)

const routes = [
    { path: '*', component: Home, meta: { } }
    // other routes here
]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
})

export default router