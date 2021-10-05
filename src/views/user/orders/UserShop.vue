<template>
  <div class="flex">
    <div class="mt-12 p-2 w-1/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-11/12 p-6 ">
      <div @click="seeOrderDetail(item.id)" v-bind:class="item.status !== 'cancelado' ?' bg-gradient-to-r from-purple-500 to-purple-700':' bg-gradient-to-r from-red-500 to-red-700'" class=" shadow
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
import SideMenuUser from "@/components/menu/SideMenuUser";
import Cookie from "js-cookie";
export default {
  name: "UserShop",
  components: {SideMenuUser},
  data(){
    return{
      orders:[

      ]
    }
  },
  methods:{
    seeOrderDetail(id){
      this.$router.push(`/userOrderDetail/${id}`)
    },
    loadOrders(){
      let url = `/findByIdUser/${Cookie.get('idUser')}`
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
          })
    }
  },
  created(){
    this.loadOrders()
  }
}
</script>

<style scoped>

</style>