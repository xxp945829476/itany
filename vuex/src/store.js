

import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

var state = {
	count:6
}

var getters = {
	count(state){
		return state.count
	}
}
const actions = {
	increment(context){
		context.commit('increment')
	},
	decrement(context){
		if(context.state.count>10){
			context.commit('decrement')
		}
	}
}
const mutations = {
	increment(state){ 
		state.count++
	},
	decrement(state){
		state.count--
	}

}

var store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;

