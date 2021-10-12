<template>
      <UserTemplate>
        <template v-slot:content>
          <div class=" mb-5 ">
            <h4 v-bind:class="order.status === 'recebido'?' bg-green-600  text-white ':'bg-purple-600   text-purple-300'" class="font-bold p-4 items-center content-center text-center justify-between rounded text-xl
             grid grid-cols-3
          ">pedido número: #{{id}}
              <span>status: {{ order.status }}</span>

              <!-- se o pedido já foi enviado, quando ele solicitar o cancelamento, terá que confirmar que o pedido chegou, para poder efetuar a devolução. -->
              <button v-if="order.status !== 'cancelado' && order.status !== 'enviado' && order.status !== 'recebido' && order.status !== 'cancelamento_solicitado' " @click="confirmTotalOrderCancel(id)" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">cancelar pedido
              </button>

              <button v-if="order.status === 'enviado' " @click="confirmReceivement(id)" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">confirmar recebimento
              </button>

              <button v-if="order.status === 'recebido' " @click="requestCancel(id)" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">solicitar cancelamento
              </button>

              <button v-if="order.status === 'cancelamento_solicitado' && order.shippingStatus !== 'retorno_enviado' " @click="returnMade(id)" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">realizar devolução
              </button>

              <button v-if="order.status "></button>

            </h4>
          </div>
          <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        <span v-for="item in products"  :key="item.id">
          <ProductOrderDetail :product="item"></ProductOrderDetail>
        </span>
          </div>
        </template>
      </UserTemplate>

</template>

<script>
import UserTemplate from "@/views/templates/UserTemplate";
import ProductOrderDetail from "@/components/store/ProductOrderDetail";
import swal from "sweetalert";
import Cookie from "js-cookie";

export default {

  name: "UserOrderDetail",
  components: {ProductOrderDetail, UserTemplate},
  data(){
    return{
      order:{},
      id :  this.$route.params.id,
      products:[

      ]
    }
  },
  methods:{
    returnMade(){
      swal({
        title: "tem certeza?",
        text: "você declara que foi até uma agência dos correios e efetuou a devolução dos pedido completo?",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/returnMade/${this.id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/order',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    swal("Operação realizada com sucesso!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    requestCancel(){
      swal({
        title: "tem certeza?",
        text: "ao solicitar cancelamento, um cupom no valor desse pedido será gerado?",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/requestCancel/${this.id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/order',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    this.order.status = "cancelamento_solicitado"
                    swal("Sua solicitação foi enviada!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    confirmReceivement(){
      swal({
        title: "tem certeza?",
        text: "você confirma que recebeu todos os produtos enviados?",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/confirmReceivement/${this.id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/order',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    this.order.status = "recebido"
                    swal("Já avisamos o vendedor que você recebeu!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    confirmTotalOrderCancel(){
      swal({
        title: "tem certeza?",
        text: "esse pedido será cancelado e essa operação será irreversível!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/cancelOrder/${this.id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/order',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    this.order.status = "cancelado"
                    swal("Item cancelado com sucesso!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    loadOrderItem(){
      let url = `/findOrderItemsByIdOrder/${this.order.id}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
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
    loadOrder(){
      let url = `/${this.id}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.order = response.data
            this.loadOrderItem()
          })
      }
    },
  created(){
    this.loadOrder()
  }
}
</script>

<style scoped>

</style>