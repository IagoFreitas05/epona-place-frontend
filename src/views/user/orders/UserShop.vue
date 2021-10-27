<template>
  <UserTemplate>
    <template v-slot:content>
      <div @click="seeOrderDetail(item.id)" v-bind:class="item.status !== 'cancelado' ?'bg-white border-l-4 border-purple-700 text-purple-600':' bg-white border-l-4 border-red-700 text-red-600'" class=" overflow-hidden shadow
        grid grid-cols-4 justify-between
          mb-4 p-4 cursor-pointer
            rounded-lg shadow-sm font-sans text-white " v-for="item in orders" :key="item.id">
        <p>pedido: <span >#{{item.id}}</span> </p>
        <p >data: <span >{{item.data.replace("T", " ")}}</span> </p>
        <p >status: <span >{{item.status}}</span> </p>
        <p >total: <span >R$ {{item.totalValue}}</span> </p>
      </div>
    </template>
  </UserTemplate>
</template>

<script>
import UserTemplate from "@/views/templates/UserTemplate";
import Cookie from "js-cookie";
export default {
  name: "UserShop",
  components: {UserTemplate},
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