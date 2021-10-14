<template>
    <AdminTemplate>
      <div @click="seeOrderDetail(item.id)" class=" shadow bg-gradient-to-r from-gray-600 to-gray-800
        grid grid-cols-4 justify-between
          mb-4 p-4 cursor-pointer
            rounded font-sans text-white " v-for="item in orders" :key="item.id">
        <p>pedido: <span class="font-bold">#{{item.id}}</span> </p>
        <p>data: <span class="font-bold">{{item.data.replace("T", " ")}}</span> </p>
        <p>status: <span class="font-bold">{{item.status}}</span> </p>
        <p>total: <span class="font-bold">R$ {{item.totalValue}}</span> </p>
      </div>
    </AdminTemplate>
</template>

<script>

import AdminTemplate from "@/views/templates/AdminTemplate";
import Cookie from "js-cookie";
export default {
  name: "DeniedCancel",
  components: {AdminTemplate},
  data(){
    return{
      orders:[

      ]
    }
  },
  methods:{
    seeOrderDetail(id){
      this.$router.push(`/ordersDetail/${id}`)
    },
    loadOrders(){
      this.loading = true
      let url = `/findByStatus/cancelamento_negado`
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
            this.orders = response.data
            this.loading = false;
          })
    }
  },
  created() {
    this.loadOrders()
  }
}
</script>

<style scoped>

</style>