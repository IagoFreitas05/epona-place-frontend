<template>
  <div class="w-full mt-8" v-on:click="calculateTotal">
    <div v-if="this.$store.state.cart != ''" class="grid sm:grid-cols-1 p-4 md:grid-cols-1 ">
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
          <div class="w-full " v-if="creditCard != ''">
            <div   v-for="item in creditCard"
                   @click="selectCreditCard(item)" :key="item.id" v-bind:class="this.selectedCreditCard.id === item.id?' text-white bg-purple-600 bg-opacity-100  ':'border-l-4 border-purple-800'"
                   class="transition bg-white ease-in duration-200
            shadow grid grid-cols-3 items-center
             cursor-pointer hover:bg-purple-800 hover:text-white
                 rounded-sm  p-4 mt-10">
              <span class="font-sans font-bold"> {{item.cardName}} </span>
              <span class="font-sans font-bold"> {{item.cardNumber.substr(9)}} **** **** </span>
              <span  class="font-sans font-bold "> {{item.flag}}  </span>
            </div>
          </div>
          <div v-else class="items-center flex justify-center">
            <p class="font-sans font-md text-center font-bold text-purple-400 ">parece que você não tem nenhum cartão de crédito</p>
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
                v-model="cupomName"
            >
            <p class="font-sans font-xl font-light mt-5 ">caso você tenha algum cupom, copie o código abaixo:</p>
            <br>
            <p v-for="item in myCupons" :key="item.id"  >
              <span v-if="item.isValid == 'true'" class="shadow-sm
              p-2
              rounded-sm bg-white border-l-4 font-sans
              border-blue-600 block mb-2">código: {{item.name}} valor: R$ {{item.value}}</span>
            </p>
            <button  @click="applyCupom(cupomName)"
                id="enter"
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
           v-bind:class="this.selectedAddress.id === item.id?' text-white bg-purple-600 bg-opacity-100  ':'border-l-4 border-purple-800'" class="transition ease-in duration-200
            shadow grid bg-white grid-cols-3 items-center
             cursor-pointer hover:bg-purple-800 hover:text-white
                 rounded-sm  p-4 mt-6">
            <span class="font-sans font-bold"> {{item.nameAddress}} </span>
            <span class="font-sans font-bold"> {{item.address}} </span>
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
        <div class="w-full bg-green-600 text-white rounded shadow p-4 mt-6 grid sm:grid-cols-1 md:grid-cols-3 text-center justify-beetwen">
          <button class="bg-green-600 border-2  focus:outline-none
                focus:shadow-outline  rounded p-3 font-bold w-6/12"
                  @click="purchase">
            finalizar pedido
          </button>
          <p v-if="!Object.keys(this.cupom).length === false" class="p-4  font-bold">
            cupom aplicado: {{cupom.name}} - R$ {{cupom.value}}
          </p>
          <div class="p-4 font-bold">total: R${{totalPrice}} frete: R${{frete}} </div>
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
import Cookie from "js-cookie";
export default {
  components: {ProductCard},
  data:function() {
    return {
      frete:'',
      paymentType:'',
      cupomName:'',
      cupom:{},
      totalPrice:0,
      creditCard:[
      ],
      deliverAddress:[
      ],
      selectedCreditCard:{},
      selectedAddress:{},
      myCupons:[]
    };
  },
  methods:{
    loadUserAddress(){
      this.loading = true
      let url = `/findByUserId/${Cookie.get('idUser')}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/address',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            console.table(response.data)
            this.deliverAddress = response.data
          })
    },
    loadUserCreditCard(){
      this.loading = true
      let url = `/findByUserId/${Cookie.get('idUser')}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/creditCard',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            console.table(response.data)
            this.creditCard = response.data
          })
    },
    goToProfile(){
      this.$router.push("Profile")
    },
    goToStore(){
      this.$router.push("Store")
    },
    selectCreditCard(item){
      swal( "cartão selecionado: "+ item.cardNumber +" " + item.flag)
      this.selectedCreditCard = item;
    },
    selectAddress(item){
      swal("endereço selecionado: " + item.nameAddress)
      this.selectedAddress = item
      this.calculateFrete();
    },
    calculateTotal(){
      this.totalPrice = 0;
      if(this.$store.state.cart !== ''){
          for(let item in this.$store.state.cart ){
            this.totalPrice = this.totalPrice + parseFloat(this.$store.state.cart[item].salePrice * this.$store.state.cart[item].quantity);
          }
      }
    },
    purchase(){
      const orderItem = [];
      const len =  this.$store.state.cart.length;
      for(var i = 0;i<len;i++){
        orderItem.push({
          idProduto:this.$store.state.cart[i].id,
          value: this.$store.state.cart[i].salePrice,
          quantity: this.$store.state.cart[i].quantity,
          idManager: this.$store.state.cart[i].idManager,
          status: "andamento",
          productImage: this.$store.state.cart[i].image
        })
      }

      if(!Object.keys(this.cupom). length === false && !Object.keys(this.selectedCreditCard).length === false){
        this.paymentType = "CREDITCARDANDCUPOM";
        swal("método de pagamento:  CREDITCARDANDCUPOM")
      }

      if(!Object.keys(this.selectedCreditCard).length === false && Object.keys(this.cupom).length === false){
        this.paymentType = "CREDITCARD"
        swal("método de pagamento: cartão de crédito")
      }

      if(Object.keys(this.selectedCreditCard).length === false && !Object.keys(this.cupom).length === false){
        this.paymentType = "CUPOM"
        swal("método de pagamento: CUPOM")
      }

      let config = {
        headers:{
          "Authorization":"Bearer " + Cookie.get('token'),
          "Content-type":"Application/json"
        }
      }
      this.axios.post("http://localhost:8080/place/order",{
        idAddress : this.selectedAddress.id,
        idCreditCard: this.selectedCreditCard.id,
        paymentType: this.paymentType,
        idCupom : this.cupom.id,
        totalValue: this.totalPrice,
        status:"andamento",
        orderItems:orderItem
      }, config)
          .then((response)=>{
            if(response.data === " " ){
              swal("Pedido feito com sucesso!", "acompanhe o status da sua compra", "success");
              this.$router.push("userShop")
            }
            else{
              swal(response.data)
            }
          }).catch(() =>{
        swal("Oops :(","alguma coisa deu errado na sua requisição","error")
      })
    },
    applyCupom(name){
      this.loading = true
      let url = `/findByName/${name}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/cupons',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            if(!Object.keys(this.cupom). length === false ){
              swal("Opa!","você já aplicou um cupom a essa compra","error");
              return
            }
            this.cupom = response.data
            if(this.cupom.quantity === this.cupom.countUsing){
              swal("Opa!","Esse cupom não está disponível","error");
              this.cupom = []
              return;
            }

            if(this.cupom.value > this.totalPrice){
              swal("Opa!","O valor do seu cupom, é maior que o valor da sua compra, que tal encher o carrinho?!","error");
              this.cupom = []
              return;
            }

            swal({
              title: "encontramos seu cupom!",
              text: `gostaria de aplicar esse cupom: ${this.cupom.name}, no valor de: ${this.cupom.value} reais`,
              icon: "success",
              buttons: ["cancelar", "tenho certeza"],
              dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                  let url = `/${this.cupom.id}`
                  this.axios
                      .request({
                        url:url,
                        method: 'get',
                        baseURL: 'http://localhost:8080/place/cupons/useCupom',
                        headers: {
                          'Authorization': 'Bearer ' + Cookie.get('token')
                        }
                      })
                      .then(response => {
                        response.data
                        this.totalPrice = this.totalPrice - this.cupom.value
                        swal("cupom aplicado com sucesso!", {
                          icon: "success",
                        });
                      })
                } else {
                  swal("uffa, nada aconteceu!");
                  this.cupom = []
                }
              });
          })
    },
    loadCupons(){
      this.loading = true
      let url = `/findByIdUser/${Cookie.get('idUser')}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/cupons',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.myCupons = response.data
            this.loading = false;
          })
    },
    calculateFrete(){
      this.loading = true
      let url = `/returnTaxByQuantity/${this.$store.state.cart.length}`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/tax',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.frete = response.data.taxValue
            this.totalPrice = this.totalPrice + parseInt(this.frete)
            this.loading = false;
          })
    }
  },
  mounted() {
    this.calculateTotal();
  },
  created() {
    this.loadUserCreditCard()
    this.loadUserAddress()
    this.loadCupons()
  }
}
</script>