
  <template>
    <div class="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6 mt-1">
      <div class="flex flex-col ">
        <div class="">
          <div class="relative h-62 w-full mb-3">
            <div class="absolute flex flex-col top-0 right-0 p-3">
              <button class="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg></button>
            </div>
            <img :src="product.productImage" alt="Just a flower" class=" w-full   object-fill  rounded-2xl">
          </div>
          <div class="flex-auto justify-evenly">
            <div class="flex flex-wrap ">
              <div class="flex items-center w-full justify-between min-w-0 ">
                <h2 class="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate "> {{ product.name }}</h2>
                <div v-if="product.status !== 'cancelamento_solicitado' && product.status !== 'cancelado' && product.status !== 'cancelamento_aprovado' "  @click="requestCancel()" class="flex items-center
                  bg-red-400 text-white text-xs
                    cursor-pointer px-2 py-1 ml-3 rounded-lg">
                  cancelar item</div>

                <div v-if="product.status === 'cancelamento_aprovado' && product.shippingStatus !== 'retorno_enviado' "  @click="madeReturn()" class="flex items-center
                  bg-green-600 text-white text-xs
                    cursor-pointer px-2 py-1 ml-3 rounded-lg">
                  declarar que devolvi este produto</div>
                </div>


            </div>
            <div class="text-xl text-white font-semibold mt-1">R$ {{product.value}}</div>
            <div class="lg:flex  py-4  text-sm text-gray-600">
              <div class="flex-1 inline-flex items-center  mb-3">
                <div class="w-full flex-none text-sm flex items-center text-gray-600">
                </div>
              </div>
              <div class="flex-1 inline-flex items-center mb-3">
                <span class="text-secondary whitespace-nowrap mr-3">categoria</span>
                <div class="cursor-pointer text-gray-400 ">
                  <span class="hover:text-purple-500 p-1 py-0">{{ product.category }}</span>
                </div>
              </div>
            </div>
            <div class="flex space-x-2 text-sm font-medium justify-start">
              <button  class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                <span>quantidade: {{product.quantity}} <span v-if="product.status !== 'andamento'"> | status: {{product.status.replace("_"," ")}}</span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


<script>
import swal from "sweetalert";
import Cookie from "js-cookie";
export default {
  name: "ProductOrderDetail",
  props: {
    product: {
      productImage: String,
      name: String,
      value: String,
      id: String,
      category: String,
      quantity:''
    }
  },
  methods:{
    requestCancel(){
      if(this.product.quantity > 1){
        this.cancelMoreThanOneItem()
      }else{
        this.cancelOneItem()
      }
    },
    cancelOneItem(){
      swal({
        title: "tem certeza?",
        text: "ao solicitar cancelamento, um cupom no valor desse pedido será gerado",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              this.loading = true
              let url = `/requestCancel/${this.product.id}`
              this.axios
                  .request({
                    url:url,
                    method: 'GET',
                    baseURL: 'http://localhost:8080/place/OrderItem',
                    headers: {
                      "Authorization":"Bearer  " + Cookie.get('token'),
                      "Access-Control-Allow-Origin": '*',
                      "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                    }
                  })
                  .then(response => {
                    response.data
                    swal("Sua solicitação foi enviada!", {
                      icon: "success",
                    });
                  })
            } else {
              swal("uffa, nada aconteceu!");
            }
          });
    },
    cancelMoreThanOneItem(){

      swal({
        text: 'quantos items você deseja cancelar?".',
        content: "input",
        button: {
          text: "cancelar",
          closeModal: false,
        },
      }).then( quantity =>{
        if (quantity) {
          this.loading = true
          let url = `/requestCancelByQuantity/${this.product.id}/${quantity}`
          this.axios
              .request({
                url:url,
                method: 'GET',
                baseURL: 'http://localhost:8080/place/OrderItem',
                headers: {
                  "Authorization":"Bearer  " + Cookie.get('token'),
                  "Access-Control-Allow-Origin": '*',
                  "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                }
              })
              .then(response => {
                response.data
                swal("Sua solicitação foi enviada!", {
                  icon: "success",
                });
              })
        } else {
          swal("uffa, nada aconteceu!");
        }
      })
    },
     madeReturn(){
       swal({
         title: "tem certeza?",
         text: "o vendedo irá receber uma notificação de que este produto foi enviado",
         icon: "warning",
         buttons: ["cancelar", "tenho certeza"],
         dangerMode: true,
       })
           .then((willDelete) => {
             if (willDelete) {
               this.loading = true
               let url = `/returnMade/${this.product.id}`
               this.axios
                   .request({
                     url:url,
                     method: 'GET',
                     baseURL: 'http://localhost:8080/place/OrderItem',
                     headers: {
                       "Authorization":"Bearer  " + Cookie.get('token'),
                       "Access-Control-Allow-Origin": '*',
                       "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
                     }
                   })
                   .then(response => {
                     response.data
                     swal("Sua declaração foi enviada!", {
                       icon: "success",
                     });
                   })
             } else {
               swal("uffa, nada aconteceu!");
             }
           });
     }
  }
}
</script>

<style scoped>

</style>