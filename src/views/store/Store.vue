<template>
  <div class="md:flex md:gap-4 sm:grid-1">
    <div  class="sm:w-full " v-bind:class="this.$store.state.cart != ''?' md:w-10/12':'md:w-12/12'">
      <div class="container mx-auto mt-8 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      <span v-for="item in products" :key="item.id">
        <ProductCard :product="item"></ProductCard>
      </span>
      </div>
    </div>

    <div v-if="this.$store.state.cart != ''" class="sm:w-full md:w-2/12 mt-8 "  >
      <div class="w-full mx-auto text-center bg-gray-700 border-gray-500 shadow-lg rounded-l-xl p-6 mt-1 " >
        <h4 class="text-xl font-bold text-purple-300 my-4 flex justify-between items-center ">carrinho <img src="../../assets/icons/carrinho-de-carrinho.png" width="50" height="50" alt=""></h4>
        <div class="shadow-lg text-sm rounded py-3 px-6 bg-gray-800 mt-2" v-for="item in this.$store.state.cart" :key="item.id" >
          <span class=" text-white">{{item.name}}</span> <span class="bg-white pl-2 pr-2 rounded-full  font-bold ">{{item.qty}}</span>
        </div>
        <div class="w-full"><button @click="goToTheCart" class="border flex
        justify-between w-full border-purple-100 font-bold
          mt-2 py-2 px-4 rounded text-purple-300 focus:outline-none
            focus:shadow-outline">pagamento
          <img src="../../assets/icons/arrow-right.png" width="20" height="20" alt=""></button></div>
        <div class="text-black text-purple-200 mt-2 text-sm" @click="removeAllCart">remover todos </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProductCard from "@/components/store/productCard";
export default {
  components: {ProductCard},

data:function() {
    return {
    products:[
      {id:"1", value:"200", name:"jordan",category:"corrida", img:"https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"},
      {id:"2", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
      {id:"3", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
      {id:"4", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
      {id:"5", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"}
    ]
  };
},
  methods:{
    removeAllCart(){
      this.$store.commit('removeAllProducts')
    },
    goToTheCart(){
      this.$router.push("Cart")
    }
  }

}
</script>