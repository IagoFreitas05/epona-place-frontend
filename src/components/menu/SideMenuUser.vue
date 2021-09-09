<template>
  <div>
    <div id="nav" class="flex-col flex gap-4 ">
      <div class=" cursor-pointer shadow bg-gradient-to-r from-blue-500  to-blue-600  text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/profile">dados</router-link>
      </div>

      <div class="cursor-pointer bg-gradient-to-r from-blue-500  to-blue-600  text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/userShop">compras</router-link>
      </div>

      <div class="cursor-pointer   bg-gradient-to-r from-blue-500  to-blue-600  text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <router-link class="text-center" to="/login">sair</router-link>
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
  color: #42b983 ;

}

#nav a {
  font-weight: bold;
  color: white;
}
</style>