import types from '../types.js'
import axios from 'axios'

const state = {
  goods: [],
  name:''
}


const getters = {
  goods(state) {
    return state.goods;
  }
}



const actions = {
  getGoods({ commit, state }) {
    axios.get('/api/goods').then(resp => {
      // state.seller = resp.data.data;
      console.log(resp.data.data)
      if (resp.data.errno == 0) {
        commit(types.GET_GOODS, resp.data.data)
      }
    })
  },
  getName({commit, state},msg){
    commit(types.GET_NAME,msg)
    console.log(msg)
  }

}

const mutations = {
  [types.GET_GOODS](state, data) {
    state.goods = data;
  },
  [types.GET_NAME](state,msg) {
    state.name = msg
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}


