<template>
  <AdminTemplate>
      <div class="mb-5 ">
        <h4 class="font-bold p-4 items-center content-center text-center justify-between rounded text-xl
            text-purple-300 bg-purple-600 grid grid-cols-3
          ">pedido número: #{{id}}
          <span>status: {{ order.status }}</span>
          <button v-if="order.status === 'andamento'" @click="sendOrder()" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">  <p  >declarar envio</p></button>
          <p v-if="order.status === 'cancelado'">pedido cancelado</p> <p  v-if="order.status === 'enviado'">pedido enviado</p>
          <button v-if="order.status === 'cancelamento_solicitado'" @click="cancelOrder()" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">  aprovar cancelamento</button>
        </h4>
        <p v-if="order.shippingStatus === 'retorno_enviado' && order.status === 'cancelamento_solicitado'" class="font-bold mt-1 bg-green-500 text-white rounded p-2">o cliente declarou que já enviou o retorno dos pedidos</p>
        <p v-if="order.shippingStatus !== 'retorno_enviado' && order.status === 'cancelamento_solicitado'" class="font-bold bg-red-500 text-white rounded mt-1 p-2">o cliente ainda não declarou que enviou os produtos para devolução</p>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        <span v-for="item in products"  :key="item.id">
          <ProductAdminDetail :product="item"></ProductAdminDetail>
        </span>
      </div>
  </AdminTemplate>
</template>

<script>
import AdminTemplate from "@/views/templates/AdminTemplate";
import swal from "sweetalert";
import ProductAdminDetail from "@/components/store/ProductAdminDetail";
import Cookie from "js-cookie";

export default {
  name: "OrdersDetail",
  components: {ProductAdminDetail, AdminTemplate},
  data(){
    return{
      order:{},
      id :  this.$route.params.id,
      products:[

      ]
    }
  },
  methods:{
    sendOrder(){
      swal({
        title: "tem certeza?",
        text: "o cliente receberá uma notificação que o sistema foi enviado!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/sendOrder/${this.id}`
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
                    this.order.status = "enviado"
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
    },
    cancelOrder(){
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
    }
  },
  created(){
    this.loadOrder()
  }
}
</script>

<style scoped>

</style>