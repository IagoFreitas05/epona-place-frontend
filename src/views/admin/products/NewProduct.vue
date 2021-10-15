<template>
  <AdminTemplate>
        <div class="items-center border-2  bg-white border-purple-200 shadow-lg rounded-md p-5 ">
          <form class=" flex  rounded grid  pb-4 " @submit.prevent="saveProduct" autocomplete="on">
            <div class="mb-4">
              <h4 class="text-md font-bold text-purple-600 my-4"> cadastro de novo produto</h4>
              <div class="flex">
                <div class="w-1/3 p-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    nome do produto
                  </label>
                  <input
                      name="productName"
                      class="shadow appearance-none
                                border rounded w-full py-2 px-3
                                  text-gray-700 leading-tight
                                    focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="nome"
                      v-model="productName"
                  >
                </div>
                <div class="w-1/3 p-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    valor
                  </label>
                  <input
                      name="value"
                      class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                      id="last_name"
                      type="text"
                      placeholder="valor"
                      v-model="value"
                  >
                </div>
                <div class="w-1/3 p-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    categoria
                  </label>
                  <select v-on:change="calculateSalePrice(selectCategory)" v-model="selectCategory" id="" class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline">
                    <option v-for="item in categories" :key="item.id" :value="item.id">{{ item.category }}</option>
                  </select>
                </div>
              </div>
              <div class="flex mt-2 mb-1">
                <div class="w-1/3 p-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    imagem
                  </label>
                  <input
                      name="edit-lastname"
                      class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                      id="image"
                      type="text"
                      placeholder="url da imagem"
                      v-model="image"
                  >
                </div>
                <div class="w-1/3 p-1">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    tamanho
                  </label>
                  <input
                      name="edit-lastname"
                      class="shadow appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                      id="size"
                      type="text"
                      placeholder="ex: 42, P, tamanho Único"
                      v-model="size"
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
                      placeholder="quantidade de items"
                      v-model="quantity"
                  >
                </div>
              </div>
              <div class="flex mt-2">
                <div class="w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    descrição
                  </label>
                  <textarea name="description"
                            placeholder="descrição do produto" id="description" class="shadow appearance-none border
                        rounded w-full py-2 px-3
                          text-gray-700 leading-tight
                            focus:outline-none
                              focus:shadow-outline" rows="10
                  " v-model="description"
                  ></textarea>
                </div>
              </div>
              <div class="flex mt-2">
                <label class="block w-1/2 py-2 px-3 text-gray-700 text-sm font-bold mb-2">
                  valor de venda
                </label>
                <input
                    name="edit-lastname"
                    class="shadow  w-1/2 appearance-none border
                                  rounded w-full py-2 px-3
                                    text-gray-700 leading-tight
                                      focus:outline-none
                                        focus:shadow-outline"
                    id="salePrice"
                    type="text"
                    placeholder="valor de venda"
                    v-model="salePrice"
                    readonly
                >
              </div>
            </div>
            <button id="save"
                    class="bg-blue-500
                          hover:bg-purple-600
                          text-white font-bold py-2
                          px-4 rounded focus:outline-none
                          focus:shadow-outline"
                    type="submit">
              adicionar novo produto
            </button>
          </form>
        </div>

  </AdminTemplate>

</template>

<script>


import AdminTemplate from "@/views/templates/AdminTemplate";
import swal from "sweetalert";
import Cookie from "js-cookie";

export default {
  components: { AdminTemplate},
  name: "NewProduct",
  data() {
    return {
      selectCategory: "",
      categories: [],
      productName: "",
      value: "",
      salePrice: "",
      description: "",
      size: "",
      quantity: "",
      image: ""
    }
  },
  methods: {
    calculateSalePrice(id) {
      const existInProduct = this.categories.findIndex((obj) => obj.id === id)
      this.salePrice = (this.value * ((this.categories[existInProduct].profit / 100) + 1)).toFixed(2)
    },
    loadCategory() {
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
          })
    },
    saveProduct() {
      let config = {
        headers: {
          "Authorization": "Bearer " + Cookie.get('token'),
          "Content-type": "Application/json"
        }
      }
      this.axios.post("http://localhost:8080/place/product", {
        name: this.productName,
        category: this.selectCategory,
        value: this.value,
        description: this.description,
        size: this.size,
        salePrice: this.salePrice,
        quantity: this.quantity,
        image: this.image
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

    }
  },
  created() {
    this.loadCategory()
  }
}
</script>

<style scoped>

</style>