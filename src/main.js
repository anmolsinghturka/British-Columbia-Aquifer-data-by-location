import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(BootstrapVue, VueRouter, Vuex)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')