<template>
  <div>
    <div id="nav" class="flex-col flex gap-4 ">
      <span class="text-blue-400 font-sans text-md font-black">vendas</span>
      <div class="cursor-pointer shadow bg-gradient-to-r
        from-blue-500  to-blue-600  text-sm
          text-white  py-2 px-4 rounded
            focus:outline-none focus:shadow-outline">
        <router-link class="text-center " to="/orders">vendas em andamento</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r
          from-blue-500  to-blue-600  text-sm
            text-white py-2 px-4
              rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/concludedOrders">vendas concluídas</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r
          from-blue-500  to-blue-600  text-sm
            text-white  py-2 px-4
              rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/canceledOrders">vendas canceladas</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r
          from-blue-500  to-blue-600  text-sm
            text-blue-200 py-2 px-4
              rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/cupons">gerenciar cupons</router-link>
      </div>
      <span class="text-blue-400 font-sans text-md font-black">produtos</span>
      <div class="cursor-pointer bg-gradient-to-r
          from-blue-500  to-blue-600  text-sm text-white
             py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/categories">categorias</router-link>
      </div>
      <div class="cursor-pointer bg-gradient-to-r
          from-blue-500  to-blue-600  text-sm text-white
             py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/newProduct">cadastrar novo produto</router-link>
      </div>
      <br>

      <div class="cursor-pointer bg-gradient-to-r
          from-red-500  to-red-600  text-sm text-white
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
  color: lightskyblue;
}

</style>