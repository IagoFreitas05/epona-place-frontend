import { createStore } from 'vuex'

export default createStore({
  state: {
    auth:{
      token:"false"
    }
  },
  mutations: {
    saveToken(state, payload){
      state.auth.token = payload
    }
  },
  actions: {
    saveToken(context, payload){
      context.commit('saveToken', payload)
    }
  },
  modules: {
  }
})
