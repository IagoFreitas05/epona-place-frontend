import { createStore } from 'vuex'

export default createStore({
  state: {
    cart:[]
  },
  mutations: {
    addProduct(state, payload){
      const existInProduct =  state.cart.find( o => o.id === payload.id)
      if(existInProduct){
        existInProduct.quantity += 1
      }else{
        payload.quantity = 1
        state.cart.push(payload)
      }
    },
    removeAllProducts(){
      this.state.cart = []
    },
    removeProduct(state,payload){
      const existInProduct =  this.state.cart.findIndex( (obj) => obj.id === payload.id)
      state.cart.splice(existInProduct,1)
    }
  },
  actions: {

  },
  modules: {
  }
})
