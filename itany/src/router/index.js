import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/Goods.vue'
import Ratings from '../components/ratings/Ratings.vue'
import Detail from '../components/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
  		{path:'/goods', component:Goods},
  		{path:'/ratings', component:Ratings},
  		{path:'/detail', component:Detail}
  ],
  linkActiveClass:'active'
})
