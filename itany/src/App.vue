<template>
  <div id="app">
      <v-header></v-header>
      <div>
      		<ul class="nav">
      			<router-link tag="li" to="/goods">商品</router-link>
      			<router-link tag="li" to="/ratings">评价</router-link>
      			<router-link tag="li" to="/seller">商家</router-link>
      		</ul>
      </div>
      <keep-alive>
          <router-view/>
      </keep-alive>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'

export default {
  components:{
      'v-header':Header
  }
}
</script>

<style>
  	.nav{
  		display: flex;
  		border-bottom:1px solid #efefef;
  	}
  	.nav li{
  		flex: 1;
  		text-align: center;
  		height: 40px;
  		line-height: 40px;
  	}
  	.active{
  		color: red
  	}
</style>
