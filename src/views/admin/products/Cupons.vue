<template>
    <AdminTemplate>
      <div class="items-center border-2  border-purple-200 shadow-lg rounded-md p-5 ">
        <form class="bg-white flex  rounded grid  pb-4 " @submit.prevent="saveCupom()" autocomplete="on">
          <div class="mb-4">
            <h4 class="text-md font-bold text-purple-600 my-4"> cadastro de novo cupom</h4>
            <div class="flex">
              <div class="w-1/3 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2" >
                  nome do cupom
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
                    required
                >
              </div>
              <div class="w-1/3 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  valor
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
                    placeholder="valor"
                    v-model="value"
                    required
                >
              </div>
              <div class="w-1/3 p-1">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  quantidade
                </label>
                <input
                    name="edit-lastname"
                    class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                    id="quantity"
                    type="number"
                    placeholder="quantidade"
                    v-model="quantity"
                    required
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
            adicionar novo cupom
          </button>
        </form>
      </div>

      <div>
        <h4 class="p-4 font-bold text-xl text-purple-600">
          cupons
        </h4>
        <div  v-bind:class="item.isValid === 'true'?'bg-gradient-to-r from-green-600 to-green-800 cursor-pointer':'bg-gradient-to-r from-gray-600 to-gray-800 cursor-not-allowed'"  class=" shadow
        grid grid-cols-5 justify-between
          mt-6 p-4
            rounded font-sans text-white " v-for="item in cupons" :key="item.id">
          <p>cupom: <span class="font-bold">{{item.type}}</span> </p>
          <p>nome: <span class="font-bold">#{{item.name}}</span> </p>
          <p>valor: <span class="font-bold">R${{item.value}}</span> </p>
          <p> utilização: <span class="font-bold"> {{item.countUsing}}</span></p>
          <button
              @click="deleteCupom(item.id)"
              class="border border-white p-1 rounded-md"
              v-if="item.isValid ==='true'">deletar cupom
          </button>
        </div>
      </div>
    </AdminTemplate>
</template>

<script>

import AdminTemplate from "@/views/templates/AdminTemplate";
import swal from "sweetalert";
import Cookie from "js-cookie";
export default {
  name: "Cupons",
  components:{AdminTemplate},
  data(){
    return{
      name:'',
      valor:'',
      cupons:[

      ]
    }
  },
  methods:{
    loadCupon(){
      this.loading = true
      let url = `/findByIdManager/${Cookie.get('idUser')}`
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
          })
    },
    saveCupom(){
      let config = {
        headers:{
          "Authorization":"Bearer " + Cookie.get('token'),
          "Content-type":"Application/json"
        }
      }
      this.axios.post("http://localhost:8080/place/cupons",{
        name:this.name,
        value: this.value,
        type: "PROMOCIONAL",
        quantity: this.quantity,
        countUsing: "0",
        isValid: "true"
      }, config)
          .then((response)=> {
            if(response.data === " "){
              swal("Salvo com sucesso", "suas informações sempre estarão seguras conosco", "success");
              this.loadCupon()
            }
            else{
              swal(response.data)
            }
          }).catch(() =>{
        swal("Oops :(","alguma coisa deu errado na sua requisição","error")
      })
    },
    deleteCupom(id){
      swal({
        title: "tem certeza?",
        text: "uma vez deletado, essa informação não poderá ser recuperada!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              let url = `/${id}`
              this.axios
                  .request({
                    url:url,
                    method: 'delete',
                    baseURL: 'http://localhost:8080/place/cupons',
                    headers: {
                      'Authorization': 'Bearer ' + Cookie.get('token')
                    }
                  })
                  .then(response => {
                    response.data
                    swal("Delatado com sucesso!", {
                      icon: "success",
                    });
                    const existInProduct =  this.cupons.findIndex( (obj) => obj.id === id)
                    this.cupons.splice(existInProduct,1)
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    }
  },
  created(){
    this.loadCupon()
  }
}
</script>

<style scoped>

</style>