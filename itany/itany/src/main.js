// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/index.js'
import VuePaginate from 'vue-paginate'


Vue.config.productionTip = false

Vue.use(Mint)
Vue.use(VuePaginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
