<template>
  <div class="flex">
    <div class="mt-12 p-2 w-1/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-11/12 p-6 ">
      <div class="mt-6 mb-5 ">
        <h4 class="font-bold p-4 items-center content-center text-center justify-between rounded text-xl
            text-purple-300 bg-purple-600 grid grid-cols-3
          ">pedido número: #{{id}}
          <span>status: {{ order.status }}</span>

          <button @click="confirmTotalOrderCancel" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">cancelar pedido</button>
        </h4>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        <span v-for="item in products"  :key="item.id">
          <ProductOrderDetail :product="item"></ProductOrderDetail>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuUser from "@/components/menu/SideMenuUser";
import ProductOrderDetail from "@/components/store/ProductOrderDetail";
import swal from "sweetalert";
import Cookie from "js-cookie";

export default {

  name: "UserOrderDetail",
  components: {ProductOrderDetail, SideMenuUser},
  data(){
    return{
      order:{},
      id :  this.$route.params.id,
      products:[

      ]
    }
  },
  methods:{
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
              swal("solicitação de cancelamento feita com sucesso!", {
                icon: "success",
              });
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