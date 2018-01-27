import types from '../types.js'
import axios from 'axios'

const state = {
  seller: {},
  detailShow:false
}


const getters = {
  seller(state) {
    return state.seller;
  },
  detailShow(){
  	 return state.detailShow;
  }
}



const actions = {
  getSeller({ commit, state }) {
    axios.get('/api/seller').then(resp => {
      // state.seller = resp.data.data;
      if (resp.data.errno == 0) {
        commit(types.GET_SELLER, resp.data.data)
      }
    })
  },
  detailShow({commit}){
  		commit(types.DETAIL_SHOW)
  },
  detailHide({commit}){
    commit(types.DETAIL_HIDE)
  }
}

const mutations = {
  [types.GET_SELLER](state, data) {
    state.seller = data;
  },
  [types.DETAIL_SHOW](state) {
    state.detailShow = true;
  },
  [types.DETAIL_HIDE](state) {
    state.detailShow = false;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
