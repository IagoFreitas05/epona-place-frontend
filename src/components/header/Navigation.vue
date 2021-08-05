<template>
  <div id="nav" class="p-8 mt-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex justify-between space-x-4">
    <div ><router-link class="text-center" to="/">Home</router-link></div>
    <div ><router-link class="text-center" to="/about">Sobre</router-link></div>
    <div ><router-link class="text-center" to="/register">Registrar</router-link></div>
    <div ><router-link class="text-center" to="/login">login</router-link></div>
  </div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

