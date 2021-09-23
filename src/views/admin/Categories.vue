<template>
  <div>
    <div class="flex">
      <div class="mt-12 sm:w-full p-2 md:w-2/12 text-left " >
        <SideMenuAdmin></SideMenuAdmin>
      </div>
      <div class="mt-8 p-6 mt-11 w-10/12">
        <div class="w-full ">
          <div class="w-7/12  mt-6  ">
            <div class="items-center border-2  border-purple-200 shadow-lg rounded-md p-5 ">
              <form class="bg-white flex  rounded grid  pb-4 " @submit.prevent="saveCategorie()" autocomplete="on">
                <div class="mb-4">
                  <h4 class="text-md font-bold text-purple-600 my-4"> cadastro de nova categoria</h4>
                  <div class="flex">
                    <div class="w-1/2 p-1">
                      <label class="block text-gray-700 text-sm font-bold mb-2" >
                        nome da categoria
                      </label>
                      <input
                          name="edit-name"
                          class="shadow appearance-none
                                border rounded w-full py-2 px-3
                                  text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="nome"
                          v-model="name"
                      >
                    </div>
                    <div class="w-1/2 p-1">
                      <label class="block text-gray-700 text-sm font-bold mb-2">
                        lucro
                      </label>
                      <input
                          name="edit-lastname"
                          class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                          id="last_name"
                          type="text"
                          placeholder="% de lucro "
                          v-model="valor"
                      >
                    </div>
                  </div>
                </div>
                <button  id="save"
                         class="bg-blue-500
                          hover:bg-purple-600
                          text-white font-bold py-2
                          px-4 rounded focus:outline-none
                          focus:shadow-outline"
                         type="submit">
                  adicionar nova categoria
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <h4 class="p-4 font-bold text-xl text-purple-600">
            categorias
          </h4>
          <div  v-bind:class="item.status === 'disponivel'?'bg-gradient-to-r from-green-600 to-green-800 cursor-pointer':'bg-gradient-to-r from-gray-600 to-gray-800 cursor-not-allowed'"  class=" shadow
        grid grid-cols-4 justify-between
          mt-6 p-4
            rounded font-sans text-white " v-for="item in cupons" :key="item.id">
            <p>nome: <span class="font-bold">#{{item.nome}}</span> </p>
            <p>valor: <span class="font-bold">R${{item.valor}}</span> </p>
            <p> status: <span class="font-bold">{{item.status}}</span></p>
            <button
                @click="deleteCupom"
                class="border border-white p-1 rounded-md"
                v-if="item.status ==='disponivel'">deletar cupom
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuAdmin from "@/components/menu/SideMenuAdmin";
import swal from "sweetalert";
export default {
  name: "Categories",
  components:{SideMenuAdmin},
  date(){
    return{

    }
  },
  methods:{
    saveCategorie(){
      swal("save")
    }
  }
}
</script>

<style scoped>

</style>