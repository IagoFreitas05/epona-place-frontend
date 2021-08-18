<template>
  <div class="mt-8  ">
    <div class=" w-screen max-w-lg   mx-auto">
      <form class="bg-white shadow-md rounded  px-8 pt-6 pb-8 mb-4">
        <h4 class="text-xl font-bold text-purple-600 my-4">acesse sua conta</h4>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" >
            email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            senha
          </label>
          <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="password" placeholder="******************">
        </div>
        <div class="flex items-center justify-between">
          <button @click="loginNotification" id="enter" class="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" name="login" type="button">
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

export default{
  name:"Login",
  data(){
    return{
      charge:false,
    }
  },
  methods:{
    chargeOn(){
      this.charge = !this.charge
    },
    loginNotification(){
      swal("tá dentro", "qual é a boa de hoje?", "success");
      this.chargeOn()

      this.$router.push("Profile")
    }
  }
}
</script>