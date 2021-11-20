<template>
  <div class="md:flex md:gap-4 sm:grid-1">

    <div  class="sm:w-full container mx-auto" v-bind:class="this.$store.state.cart != ''?' md:w-10/12':'md:w-12/12'">
      <form class="">
        <div class="flex mt-8 flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row">
          <input class="px-6 py-3 w-full  text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800
          dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                 type="text" name="email" placeholder="está procurando por algum item?" aria-label="procurando por algum item?">

          <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors
          duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">procurar</button>
        </div>
      </form>

      <div class="container mx-auto mt-8 grid sm:grid-cols-1 md:grid-cols-4 gap-4">
      <span v-for="item in products" :key="item.id">
        <ProductCard :product="item"></ProductCard>
      </span>
      </div>
    </div>

    <div v-if="this.$store.state.cart != ''" class="sm:w-full md:w-2/12 mt-8 "  >
      <div class="w-full mx-auto text-center bg-gray-700 border-gray-500 shadow-lg rounded-l-xl p-6 mt-1 " >
        <h4 class="text-xl font-bold text-purple-300 my-4 flex justify-between items-center ">carrinho <img src="../../assets/icons/carrinho-de-carrinho.png" width="50" height="50" alt=""></h4>
        <div class="shadow-lg text-sm rounded py-3 px-6 bg-gray-800 mt-2" v-for="item in this.$store.state.cart" :key="item.id" >
          <span class=" text-white">{{item.name}}</span> <span class="bg-white pl-2 pr-2 rounded-full  font-bold ">{{item.quantity}} </span>
          <p class="text-white cursor-pointer text-gray-500" @click="removeProduct(item)">remover</p>
        </div>
        <div class="w-full"><button @click="goToTheCart" class="border flex
        justify-between w-full border-purple-100 font-bold
          mt-2 py-2 px-4 rounded text-purple-300 focus:outline-none
            focus:shadow-outline">pagamento
          <img src="../../assets/icons/arrow-right.png" width="20" height="20" alt=""></button></div>
        <div class="text-black text-purple-200 mt-2 cursor-pointer text-sm" @click="removeAllCart">remover todos </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/store/productCard";
import Cookie from "js-cookie";
export default {
  components: {ProductCard},

data:function() {
    return {
    products:[]
  };
},
  methods:{
    loadProduct(){
      let url = ``
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/product/findByStatus/ativo',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
           this.products = response.data
          })
    },
    removeAllCart(){
      this.$store.commit('removeAllProducts')
    },
    goToTheCart(){
      this.$router.push("Cart")
    },
    removeProduct(item){
      this.$store.commit('removeProduct', item)
    }
  },
  created() {
    this.loadProduct();
  }
}
</script>