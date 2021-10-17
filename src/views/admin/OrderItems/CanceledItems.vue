<template>
  <AdminTemplate>
    <div  class=" bg-white border-l-4 border-red-600 text-red-600 shadow
        flex items-center justify-between
          mb-4 p-4 cursor-pointer
            rounded-sm font-sans text-white " v-for="item in orderItem" :key="item.id">
      <p>pedido: <span class="">#{{item.idPedido}}</span> </p>
      <p>status item: <span class="">{{item.status}}</span> </p>
      <p>valor do item: <span class="">R$ {{item.value}}</span> </p>
      <div class="flex">
        <div class=" flex-col text-center ">
          <img width="200" height="200" :src="item.productImage" alt="">
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
      orderItem:[]
    }
  },
  methods:{
    requestCancel(){
      this.loading = true
      let url = `/findByStatus/cancelado`
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
                    swal("Aprovada com sucesso!", {
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
  }
}
</script>

<style scoped>

</style>