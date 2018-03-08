<template>
	<div>
		<div class="header">{{seller.name}}</div>
		<div class="tx" @click="detailShow">
			<img class="pic" :src="seller.avatar" />
		</div>
		<v-detail></v-detail>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex'
	import Detail from '../detail/Detail.vue'

	export default{
		created(){
			this.$store.dispatch('getSeller');
		},
		computed:{
			...mapGetters([
				'seller'
			])
		},
		components:{
			'v-detail':Detail
		},
		methods:{
			detailShow(){
				this.$store.dispatch('detailShow')
			}
		}
	}
</script>

<style lang="less" scoped>
	.header{
		height: 44px;
		background:rgba(7,17,27,0.3);
		font-size:14px;
		color:#fff;
		text-align:center;
		line-height:44px;
	}
	.tx{
		width: 100px;
		.pic{
			width: 100% 
		}
	}


</style>