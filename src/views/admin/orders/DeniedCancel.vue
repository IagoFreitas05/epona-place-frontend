<template>
    <AdminTemplate>
      <div @click="seeOrderDetail(item.id)" class=" shadow bg-white border-l-4 border-gray-600 text-gray-600
        grid grid-cols-4 justify-between
          mb-4 p-4 cursor-pointer
            rounded-sm font-sans text-white " v-for="item in orders" :key="item.id">
        <p>pedido: <span class="">#{{item.id}}</span> </p>
        <p>data: <span class="">{{item.data.replace("T", " ")}}</span> </p>
        <p>status: <span class="">{{item.status}}</span> </p>
        <p>total: <span class="">R$ {{item.totalValue}}</span> </p>
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