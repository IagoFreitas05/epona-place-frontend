<template>
  <AdminTemplate>
    <form class="bg-white flex  border-2  p-4 border-purple-200 rounded grid  pb-4 " @submit.prevent="saveCategory()" autocomplete="on">
      <div class="mb-4">
        <h4 class="text-md font-bold text-purple-600 my-4"> cadastro de nova categoria</h4>
        <div class="flex">
          <div class="w-1/2 p-1">
            <label class="block text-gray-700 text-sm font-bold mb-2">
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
                v-model="nameCategorie"
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
                v-model="profit"
            >
          </div>
        </div>
      </div>
      <button id="save"
              class="bg-blue-500
                          hover:bg-purple-600
                          text-white font-bold py-2
                          px-4 rounded focus:outline-none
                          focus:shadow-outline"
              type="submit">
        adicionar nova categoria
      </button>
    </form>

    <div>
      <h4 class="p-4 font-bold text-xl text-purple-600">
        categorias
        <p v-if="loading ==='true'">carregando</p>
      </h4>
      <div v-if="categories !== ' ' ">
        <div class=" shadow-lg
              grid grid-cols-3 justify-between
              mt-6 p-4 place-items-center
              rounded font-sans border
              border-blue-300"
             v-for="item in categories" :key="item.id">
          <p>nome: <span class="font-bold">{{ item.category }}</span></p>
          <p>valor: <span class="font-bold">%{{ item.profit }}</span></p>

          <button
              class="bg-blue-500
                  hover:bg-red-600
                  text-white py-2
                  px-4 rounded focus:outline-none
                  focus:shadow-outline"
              type="button"
              @click="removeCategory(item.id)"
          >
            excluir
          </button>
        </div>
      </div>
    </div>

  </AdminTemplate>

</template>

<script>

import AdminTemplate from "@/views/templates/AdminTemplate";
import swal from "sweetalert";
import Cookie from "js-cookie";

export default {
  name: "Categories",
  components: {AdminTemplate},
  data() {
    return {
      nameCategorie: "",
      profit: "",
      categories: [],
      loading: false
    }
  },
  methods: {
    saveCategory() {
      let config = {
        headers: {
          "Authorization": "Bearer " + Cookie.get('token'),
          "Content-type": "Application/json"
        }
      }
      this.axios.post("http://localhost:8080/place/category", {
        category: this.nameCategorie,
        profit: this.profit
      }, config)
          .then((response) => {
            if (response.data === " ") {
              swal("Salvo com sucesso", "suas informações sempre estarão seguras conosco", "success");
              this.loadCategories()
            } else {
              swal(response.data)
            }
          }).catch(() => {
        swal("Oops :(", "alguma coisa deu errado na sua requisição", "error")
      })
    },
    loadCategories() {
      this.loading = true
      let url = `/findByIdManager/${Cookie.get('idUser')}`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/category',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.categories = response.data
            this.loading = false;
          })
    },
    removeCategory(id) {
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
                    url: url,
                    method: 'delete',
                    baseURL: 'http://localhost:8080/place/category',
                    headers: {
                      'Authorization': 'Bearer ' + Cookie.get('token')
                    }
                  })
                  .then(response => {
                    response.data
                    swal("Delatado com sucesso!", {
                      icon: "success",
                    });
                    const existInProduct = this.categories.findIndex((obj) => obj.id === id)
                    this.categories.splice(existInProduct, 1)
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    }
  },
  created() {
    this.loadCategories()
  }
}
</script>

<style scoped>

</style>