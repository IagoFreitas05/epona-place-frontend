<template>
  <div class="h-screen">
    <div id="nav" class="flex-col p-3 flex gap-3 bg-gray-700  rounded-r-md h-full ">
      <p class="text-gray-500 font-bold">menu</p>
      <div
          class=" cursor-pointer border border-gray-500 shadow bg-gradient-to-r from-gray-500
          to-gray-600  text-sm text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
        <router-link class="text-center " to="/profile"> dados </router-link>
      </div>
      <div
          class="cursor-pointer border border-gray-500 bg-gradient-to-r from-gray-500  to-gray-600
          text-sm text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/userShop"> compras </router-link>
      </div>

      <div
          class="cursor-pointer border border-gray-500 bg-gradient-to-r from-gray-500
          to-gray-600   text-sm text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/userCupons"> cupons</router-link>
      </div>

      <div
          class="cursor-pointer border border-gray-500  bg-gradient-to-r from-gray-500
          to-gray-600   text-sm text-white  py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/login"> sair</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenuUser"
}
</script>


<style scoped>
#nav a.router-link-exact-active {
  color: #FFFFFF;

}

#nav a {
  color: #A9A9A9;
}

#nav a:hover {
  color: #FFFFFF;
}
</style>