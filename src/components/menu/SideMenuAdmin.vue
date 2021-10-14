<template>
  <div class="h-screen">
    <div id="nav" class="flex-col p-3 flex gap-3 bg-gray-700  rounded-r-lg h-full ">
      <span class="text-gray-500 font-bold">vendas</span>
      <div class="cursor-pointer border border-gray-500 shadow bg-gradient-to-r from-gray-500  to-gray-600  text-sm
          text-white  py-2 px-4 rounded
            focus:outline-none focus:shadow-outline">
        <router-link class="text-center " to="/orders">aguardando envio</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/concludedOrders">enviados</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/receivedOrders">recebidos pelo cliente</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/requestCanceledOrders">solicitações de cancelamento</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/aprovedCancel">solicitações aprovadas</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/deniedCancel">solicitações negadas</router-link>
      </div>

      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/canceledOrders">cancelados </router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r from-gray-500  to-gray-600  text-sm
            text-blue-200 py-2 px-4
              rounded focus:outline-none  border border-gray-500 focus:shadow-outline">
        <router-link class="text-center" to="/cupons">gerenciar cupons</router-link>
      </div>
      <span class="text-gray-500 font-bold">produtos</span>
      <div class="cursor-pointer bg-gradient-to-r  border border-gray-500 from-gray-500  to-gray-600  text-sm text-white
             py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/categories">categorias</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r  border border-gray-500 from-gray-500  to-gray-600  text-sm text-white
             py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/newProduct">cadastrar novo produto</router-link>
      </div>
      <br>

      <div class="cursor-pointer bg-gradient-to-r  border border-gray-500 from-gray-500  to-gray-600  text-sm text-white
             py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center " to="/login"><span class="text-white">sair</span></router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuAdmin"
}
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: #FFFFFF ;

}

#nav a {
  color: #A9A9A9;
}

#nav a:hover{
  color:#FFFFFF;
}

</style>