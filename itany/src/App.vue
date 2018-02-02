<template>
  <div id="app">
      <v-header></v-header>
      <div class="nav">  
        <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>  
        <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>  
        <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>  
      </div>  
      

      <div>
      		<ul class="nav">
      			<router-link tag="li" to="/goods?name=jack">商品</router-link>
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
import { Loadmore } from 'mint-ui';

export default {
  data() {  
    return {  
      active: 'tab-container1'  
    }
  },
  mounted(){

  },
  components:{
      'v-header':Header
  },
  methods:{
    tosat(){

    },
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
