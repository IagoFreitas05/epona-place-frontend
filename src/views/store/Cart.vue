<template>
  <div class="w-full mt-8">
    <div v-if="this.$store.state.cart != ''" class="grid sm:grid-cols-1 md:grid-cols-2 ">
      <div class="w-full" >
        <h4 class="text-xl font-sans text-center font-bold text-purple-600 my-4 flex justify-center items-center ">formas de pagamento &nbsp;<img src="../../assets/icons/credit-card.png" width="50" height="50" alt=""></h4>
        <div class="w-6/12" v-if="creditCard != ''">
          <h4 class="font-sans font-xl font-black ">selecione um cartão de crédito</h4>
          <div   v-for="item in creditCard" @click="selectCreditCard(item)" :key="item.id" v-bind:class="this.selectCreditCard.id === item.id?' text-white bg-purple-600 bg-opacity-100  ':'border-2 border-purple-200'" class="transition ease-in duration-200
            shadow-lg grid grid-cols-3 items-center
             cursor-pointer hover:bg-purple-800 hover:text-white
                 rounded  p-4 mt-5">
            <span class="font-sans font-bold"> {{item.name}} </span>
            <span class="font-sans font-bold"> {{item.numero.substr(9)}} **** **** </span>
            <span  class="font-sans font-bold "> {{item.flag}}  </span>
          </div>
        </div>
        <div v-else class="items-center flex justify-center">
          <p class="font-sans font-md text-center font-bold text-purple-400 ">parece que você não tem nenhum cartão de crédito cadastro, por favor cadastre um para finalizar sua compra</p>
        </div>
      </div>
      <div class="w-full "  >
        <h4 class="text-xl text-center font-bold text-purple-600 my-4 flex justify-center items-center font-sans">items do carrinho  &nbsp;<img src="../../assets/icons/carrinho-de-carrinho.png" width="50" height="50" alt=""></h4>
        <div class="grid md:grid-cols-1 md:grid-cols-3 gap-2 ">
          <span v-for="item in this.$store.state.cart"  :key="item.id">
           <ProductCard :product="item"></ProductCard>
          </span>
        </div>
      </div>
    </div>
      <div v-else class="w-9/12 m-auto py-16  flex items-center justify-center">
        <div class="bg-white shadow-lg overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8">
            <h1 class="text-4xl font-bold text-purple-400">Oops..!</h1>
            <br>
            <p class="text-xl pb-8 px-12 font-medium">parece que você não tem nenhum item no seu carrinho ainda, que tal ir as compras?.</p>
            <button @click="goToStore" class="bg-gradient-to-r text-center content-center justify-center  from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
             <div class="flex gap-4 justify-between">
               quero comprar! <img src="../../assets/icons/arrow-right.png" width="20" height="20" alt="">
             </div>
            </button>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import ProductCard from "@/components/store/productCard";
import swal from "sweetalert";
export default {
  components: {ProductCard},
  data:function() {
    return {
      creditCard:[
        {id:"1",name:"IAGO F C SOUZA", flag:"mastercard", numero:"5541 1123 1231 1233"},
        {id:"2",name:"GABI DO PRADO OLIVEIRA", flag:"mastercard", numero:"5541 1123 1231 1233"}
      ],
      selectedCreditCard:{}
    };
  },
  methods:{
    goToStore(){
      this.$router.push("Store")
    },
    selectCreditCard(item){
      swal( "cartão selecionado "+ item.numero +" " + item.flag)
      this.selectCreditCard = item;
    }
  }

}
</script>