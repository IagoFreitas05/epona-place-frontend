<template>
  <div class="flex">
    <div class="mt-12 p-2 w-1/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-11/12 p-6 ">
      <div  v-bind:class="item.status === 'disponivel'?'bg-gradient-to-r from-green-600 to-green-800 cursor-pointer':'bg-gradient-to-r from-gray-600 to-gray-800 cursor-not-allowed'"  class=" shadow
        grid grid-cols-3 justify-between
          mt-6 p-4
            rounded font-sans text-white " v-for="item in cupons" :key="item.id">
        <p>nome: <span class="font-bold">#{{item.nome}}</span> </p>
        <p>valor: <span class="font-bold">R${{item.valor}}</span> </p>
        <p> status: <span class="font-bold">{{item.status}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>

import SideMenuUser from "@/components/menu/SideMenuUser";
export default {
  name: "UserCupons",
  components:{SideMenuUser},
  data(){
    return{
      cupons:[
        {
          id:'123',
          nome:'123',
          valor:'12321',
          status:'disponivel'
        },
        {
          id:'123',
          nome:'123',
          valor:'122',
          status:'indisponivel'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>