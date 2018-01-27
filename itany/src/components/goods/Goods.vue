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
		},
		computed:{
			...mapGetters([
				'goods'	
			])
		},
	}
</script>

<style lang="less" scoped>
	
</style>