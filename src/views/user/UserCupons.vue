<template>
  <UserTemplate>
    <template v-slot:content>
      <div  v-bind:class="item.isValid === 'true'?'bg-gradient-to-r from-green-600 to-green-800 cursor-pointer':'bg-gradient-to-r from-gray-600 to-gray-800 cursor-not-allowed'"  class=" shadow
        grid grid-cols-2 justify-between
          mt-6 p-4
            rounded font-sans text-white " v-for="item in cupons" :key="item.id">
        <p>nome: <span class="font-bold">{{item.name}}</span> </p>
        <p>valor: <span class="font-bold">R${{item.value}}</span> </p>
      </div>
    </template>
  </UserTemplate>
</template>

<script>
import UserTemplate from "@/views/templates/UserTemplate";
import Cookie from "js-cookie";
export default {
  name: "UserCupons",
  components:{UserTemplate},
  data(){
    return{
      cupons:[

      ]
    }
  },
  methods:{
    loadByUserId(){
      this.loading = true
      let url = `/findByIdUser/${Cookie.get('idUser')}`
      this.axios
          .request({
            url:url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/cupons',
            headers: {
              "Authorization":"Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.cupons = response.data
            this.loading = false;
          })
    }
  },
  created() {
    this.loadByUserId();
  }
}
</script>

<style scoped>

</style>