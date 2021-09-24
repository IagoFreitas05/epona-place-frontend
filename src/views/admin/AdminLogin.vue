<template>
  <div class="mt-8  ">
    <div class=" w-screen max-w-lg   mx-auto">
      <form @submit.prevent="storeLogin" class="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
        <h4 class="text-xl font-bold text-purple-600 my-4">acesse sua conta administrativa</h4>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            email
          </label>
          <input
              class="shadow appearance-none
                border rounded w-full py-2 px-3 text-gray-700
                  leading-tight focus:outline-none
                    focus:shadow-outline required"
              name="email"
              id="email"
              type="email"
              placeholder="email"
              v-model="mail"
              required
          >
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            senha
          </label>
          <input
              class="shadow appearance-none border
              rounded w-full py-2 px-3 text-gray-700 mb-3
              leading-tight focus:outline-none
              focus:shadow-outline
              required"
              name="password"
              id="password"
              type="password"
              autocomplete="on"
              placeholder="******************"
              v-model="password"
              required
          >
        </div>
        <div class="flex items-center justify-between">
          <button @click="chargeOn" id="enter" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" name="login" type="submit">
            <span v-if="charge ===  true ">acessando...</span>
            <span v-else-if="charge === false">acessar</span>
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 Epona Sports. Todos os direitos reservados.
      </p>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import Cookie from "js-cookie";

export default {
  data(){
    return{
      mail:"",
      password:"",
      charge:false,
    }
  },
  methods:{
    chargeOn(){
      this.charge = !this.charge
    },
    storeLogin(){
      this.axios.post("http://localhost:8080/place/auth",{
        mail:this.mail,
        password: this.password,
        token:""
      })
          .then((response)=>{
            response.data
            swal("Uhuu 0/","Login feito com sucesso","success")
                .then(() => {
                  this.token = response.data.token
                  Cookie.set('token', response.data.token)
                  this.$router.push("adminProfile")
                });
          }).catch(() =>{
        swal("Oops :(","parece que seus dados estão incorretos.","error")
      })
    },
    loadUserData(){
      let config = {
        headers:{
          Authorization:"Bearer " + Cookie.get('token')
        }
      }
      this.axios.get("http://localhost:8080/place/auth",config)
          .then((response)=>{
            Cookie.set('idUser', response.data.idUser)
          })
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>