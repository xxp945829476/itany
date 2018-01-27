
<template>
	<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
		<div class="detail" v-show="detailShow" @click="detailHide">
			<div class="detail_content">
				{{seller.name}} {{seller.bulletin}}
			</div>
		</div>
	</transition>
</template>

<script>
	import {mapGetters} from 'vuex'
	import 'animate.css/animate.css'

	export default{
		computed:{
			...mapGetters([
				'detailShow',
				'seller'
			])
		},
		methods:{
			detailHide(){
				this.$store.dispatch('detailHide')
			}
		},
	}
</script>

<style lang="less" scoped>
	.detail{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 66;
		background: rgba(0,0,0,0.5);
		&>.detail_content{
			background: #fff;
			position: absolute;
			width: 80%;
			top: 50%;
			left: 10%;
			transform: translate(0,-50%);
		}
	}
</style>