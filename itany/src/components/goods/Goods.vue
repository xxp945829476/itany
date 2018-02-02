<template>
	<div>
		<ul>
			<li v-for="item in goods">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default{
		created(){
			this.$store.dispatch('getGoods');
			this.show()
		},
		computed:{
			...mapGetters([
				'goods'	
			]),
		},
		methods:{
			show(){
				console.log(this.$route.query)
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>