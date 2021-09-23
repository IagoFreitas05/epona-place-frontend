<template>
  <div class="w-full mt-8" v-on:click="calculateTotal">
    <div v-if="this.$store.state.cart != ''" class="grid sm:grid-cols-1 md:grid-cols-1 ">
      <div class="w-full" >
        <hr>
        <h4 class="text-xl text-center font-bold text-purple-600 my-4 flex justify-left items-center font-sans">items do carrinho  &nbsp;<img src="../../assets/icons/carrinho-de-carrinho.png" width="50" height="50" alt=""></h4>
        <div class="grid md:grid-cols-1 md:grid-cols-6 gap-2 ">
          <span v-for="item in this.$store.state.cart"  :key="item.id">
           <ProductCard :product="item"></ProductCard>
          </span>
        </div>
      </div>
    </div>

      <div class="w-full grid sm:grid-cols-1 mt-8 md:grid-cols-2 gap-4" v-if="this.$store.state.cart != ''" >

        <div class="w-full  p-4">
          <hr>
          <h4 class="text-xl font-sans text-center font-bold
          text-purple-600 my-4 flex justify-left items-center ">
            formas de pagamento &nbsp;
            <img src="../../assets/icons/credit-card.png" width="50" height="50" alt=""></h4>
          <div class="w-full" v-if="creditCard != ''">

            <div   v-for="item in creditCard"
                   @click="selectCreditCard(item)" :key="item.id" v-bind:class="this.selectedCreditCard.id === item.id?' text-white bg-purple-600 bg-opacity-100  ':'border-2 border-purple-200'"
                   class="transition ease-in duration-200
            shadow-lg grid grid-cols-3 items-center
             cursor-pointer hover:bg-purple-800 hover:text-white
                 rounded  p-4 mt-10">
              <span class="font-sans font-bold"> {{item.name}} </span>
              <span class="font-sans font-bold"> {{item.numero.substr(9)}} **** **** </span>
              <span  class="font-sans font-bold "> {{item.flag}}  </span>
            </div>
          </div>
          <div v-else class="items-center flex justify-center">
            <p class="font-sans font-md text-center font-bold text-purple-400 ">parece que você não tem nenhum cartão de crédito cadastro, por favor cadastre um para finalizar sua compra</p>
          </div>
          <h4 class="font-sans font-xl font-light mt-5 ">caso tenha um cupom de desconto, digite o código aqui </h4>
          <div class=" mt-4 ">
            <input
                class="shadow-lg appearance-none
                border-2 border-purple-200 rounded w-full py-2 px-3 text-gray-700
                  leading-tight focus:outline-none
                    focus:shadow-outline required pt-4 pb-4"
                name="cupom"
                id="cupom"
                type="text"
                placeholder="cupom"
                required
            >
            <button id="enter"
                    class="bg-blue-500 hover:bg-purple-600
            text-white font-bold py-2 px-4 rounded mt-4
              focus:outline-none
                focus:shadow-outline" name="login" type="button">
              aplicar cupom
            </button>
          </div>
        </div>
        <div class="w-full p-4 ">
          <hr>
          <h4 class="text-xl font-sans
          text-center font-bold text-purple-600
            my-4 flex justify-left items-center mt-8 ">endereços de entrega &nbsp;
            <img src="../../assets/icons/caminhao-de-entrega.png" width="50" height="50" alt=""></h4>
          <div   v-for="item in deliverAddress" @click="selectAddress(item)" :key="item.id"
                 v-bind:class="this.selectedAddress.id === item.id?' text-white bg-purple-600 bg-opacity-100  ':'border-2 border-purple-200'" class="transition ease-in duration-200
            shadow-lg grid grid-cols-3 items-center
             cursor-pointer hover:bg-purple-800 hover:text-white
                 rounded  p-4 mt-6">
            <span class="font-sans font-bold"> {{item.name}} </span>
            <span class="font-sans font-bold"> {{item.logradouro}} </span>
          </div>
          <button @click="goToProfile" class="bg-blue-500 hover:bg-purple-600
            text-white font-bold py-2 px-4 rounded mt-4
              focus:outline-none
                focus:shadow-outline">
            adicionar novo endereço
          </button>
        </div>
      </div>

    <div v-if="this.$store.state.cart != ''" class="">
        <div class="w-full bg-green-600 text-white rounded shadow p-4 mt-6 grid sm:grid-cols-1 md:grid-cols-2 text-center justify-beetwen">
          <button class="bg-green-600 border-2  focus:outline-none
                focus:shadow-outline  rounded p-3 font-bold w-6/12"
                  @click="purchase">
            finalizar pedido
          </button>
          <div class="p-4 font-bold">total: {{totalPrice}} </div>
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
      totalPrice:0,
      creditCard:[
        {id:"1",name:"IAGO F C SOUZA", flag:"mastercard", numero:"5541 1123 1231 1233"},
        {id:"2",name:"GABI DO PRADO OLIVEIRA", flag:"visa", numero:"5541 1123 8312 9821"}
      ],
      deliverAddress:[
        {id:"1", name:'casa', logradouro:'Rua Augusto'},
        {id:"2", name:'trabalho', logradouro:'Rua das Couves'}
      ],
      selectedCreditCard:{},
      selectedAddress:{}
    };
  },
  methods:{
    goToProfile(){
      this.$router.push("Profile")
    },
    goToStore(){
      this.$router.push("Store")
    },
    selectCreditCard(item){
      swal( "cartão selecionado: "+ item.numero +" " + item.flag)
      this.selectedCreditCard = item;
    },
    selectAddress(item){
      swal("endereço selecionado: " + item.name)
      this.selectedAddress = item
    },
    calculateTotal(){
      this.totalPrice = 0;
      if(this.$store.state.cart != ''){
          for(let item in this.$store.state.cart ){
            this.totalPrice = this.totalPrice + parseFloat(this.$store.state.cart[item].value * this.$store.state.cart[item].qty);
          }
      }
    },
    purchase(){
      swal("uhuuu!","seu pedido foi processado com sucesso","success");
      this.$router.push("Profile")
    }
  },
  mounted() {
    this.calculateTotal();
  }
}
</script>