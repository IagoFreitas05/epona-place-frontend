<template>
  <AdminTemplate>
    <div  class=" bg-white border-l-4 border-yellow-600 text-yellow-600 shadow
        flex items-center justify-between
          mb-4 p-4 cursor-pointer
            rounded-sm font-sans text-white " v-for="item in orderItem" :key="item.id">
      <p>pedido: <span class="">#{{item.idPedido}}</span> </p>
      <p>status item: <span class="">{{item.status}}</span> </p>
      <p>valor do item: <span class="">R$ {{item.value}}</span> </p>
      <div class="flex">
        <div class=" flex-col text-center ">
          <img width="200" height="200" :src="item.productImage" alt="">
          <button class="bg-green-500 mt-1 font-bold rounded-l-sm
            text-white p-1 cursor-pointer" @click="aprove(item.id)">aprovar</button>
          <button class="bg-red-500 mt-1 font-bold rounded-r-sm
            text-white p-1 cursor-pointer" @click="denied(item.id)">negar</button>
        </div>
      </div>
    </div>
    <!-- cancelamento de multiplos items -->
    <div  class=" bg-white border-l-4 border-yellow-600 text-yellow-600 shadow
        flex items-center justify-between
          mb-4 p-4 cursor-pointer
            rounded-sm font-sans text-white " v-for="item in multipleCancel" :key="item.id">
      <p>pedido: <span class="">#{{item.idPedido}}</span> </p>
      <p>status item: <span class="">{{item.status}}</span> </p>
      <p>valor do item: <span class="">R$ {{item.value}} x {{item.quantity}} (quantidade de items)</span> </p>
      <div class="flex">
        <div class=" flex-col text-center ">
          <img width="200" height="200" :src="item.product_image" alt="">
          <button class="bg-green-500 mt-1 font-bold rounded-l-sm
            text-white p-1 cursor-pointer" @click="aproveMultiple(item.id, item.quantity, item.order_item_id)">aprovar</button>
          <button class="bg-red-500 mt-1 font-bold rounded-r-sm
            text-white p-1 cursor-pointer" @click="denied(item.id)">negar</button>
        </div>
      </div>
    </div>
  </AdminTemplate>
</template>

<script>
import AdminTemplate from "@/views/templates/AdminTemplate";
import Cookie from "js-cookie";
import swal from "sweetalert";
export default {
  components:{AdminTemplate},
  name: "RequestCancelItems",
  data(){
    return{
      orderItem:[],
      multipleCancel:[],
    }
  },
  methods:{
    requestCancel(){
      this.loading = true
      let url = `/findByStatus/cancelamento_solicitado`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/OrderItem',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.orderItem = response.data
            this.loading = false;
          })
    },
    requestMultipleCancel(){
      this.loading = true
      let url = `/returnMultipleRequestCancelItem`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/OrderItem',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.multipleCancel = response.data
            this.loading = false;
          })
    },
    aprove(id){
       swal({
         title: "tem certeza?",
         text: "o cliente receberá uma notificação que a solicitação foi aprovada!",
         icon: "warning",
         buttons: ["cancelar", "tenho certeza"],
         dangerMode: true,
       })
           .then((willDelete) => {
             if (willDelete) {
               this.loading = true
               let url = `/aprovedCancel/${id}`
               this.axios
                   .request({
                     url:url,
                     method: 'GET',
                     baseURL: 'http://localhost:8080/place/OrderItem',
                     headers: {
                       "Authorization":"Bearer  " + Cookie.get('token'),
                       "Access-Control-Allow-Origin": '*',
                       "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                     }
                   })
                   .then(response => {
                     response.data
                     this.requestCancel();
                     swal("Aprovada com sucesso!", {
                       icon: "success",
                     });
                   })
             } else {
               swal("uffa, nada aconteceu!");
             }
           });
     },
    aproveMultiple(id, quantity, order_item_id){
      swal({
        title: "tem certeza?",
        text: "o cliente receberá uma notificação que a solicitação foi aprovada!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/cancelMultipleItems/${order_item_id}/${quantity}/${id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/OrderItem',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    this.requestCancel();
                    swal("Aprovada com sucesso!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    denied(id){
      swal({
        title: "tem certeza?",
        text: "o cliente receberá uma notificação que a solicitação foi negada!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/deniedCancel/${id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/OrderItem',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    this.requestCancel();
                    swal("Negada com sucesso!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    }
  },
  created() {
    this.requestCancel();
    this.requestMultipleCancel();
  }
}
</script>

<style scoped>

</style>