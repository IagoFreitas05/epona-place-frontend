<template>
  <div class="flex">
    <div class="mt-12 p-2 w-2/12 text-left " >
      <SideMenuAdmin></SideMenuAdmin>
    </div>
    <div class="mt-12 w-10/12 p-6 ">
      <div @click="seeOrderDetail(item.id)" class=" shadow bg-gradient-to-r from-green-600 to-green-800
        grid grid-cols-4 justify-between
          mt-6 p-4 cursor-pointer
            rounded font-sans text-white " v-for="item in orders" :key="item.id">
        <p>pedido: <span class="font-bold">#{{item.id}}</span> </p>
        <p>data: <span class="font-bold">{{item.data.replace("T", " ")}}</span> </p>
        <p>status: <span class="font-bold">{{item.status}}</span> </p>
        <p>total: <span class="font-bold">R$ {{item.totalValue}}</span> </p>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuAdmin from "@/components/menu/SideMenuAdmin";
import Cookie from "js-cookie";
export default {
  name: "ReceivedOrders",
  components: {SideMenuAdmin},
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
      let url = `/findByStatus/recebido`
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