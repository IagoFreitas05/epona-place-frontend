<template>
  <div class="flex">
    <div class="mt-12 p-2 w-1/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-11/12 p-6 ">
      <div class="mt-6 mb-5 ">
        <h4 class="font-bold p-4 items-center content-center text-center justify-between rounded text-xl
            text-purple-300 bg-purple-600 grid grid-cols-3
          ">pedido número: #{{id}}
          <span>status: em faturamento</span>
          <button @click="confirmTotalOrderCancel" class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 ">cancelar pedido</button>
        </h4>
      </div>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-2">
        <span v-for="item in products"  :key="item.id">
          <ProductOrderDetail :product="item"></ProductOrderDetail>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuUser from "@/components/menu/SideMenuUser";
import ProductOrderDetail from "@/components/store/ProductOrderDetail";
import swal from "sweetalert";

export default {

  name: "UserOrderDetail",
  components: {ProductOrderDetail, SideMenuUser},
  data(){
    return{
      id :  this.$route.params.id,
      products:[
        {id:"1",
          value:"200",
          name:"jordan",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80",
          qty:'1'},
        {id:"2", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", qty:'2'},
        {id:"3", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", qty:'4'},
        {id:"4", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80", qty:'1'},
        {id:"5", value:"100", name:"corrida",category:"corrida", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" , qty:'1'}
      ]
    }
  },
  methods:{
    confirmTotalOrderCancel(){
      swal({
        title: "tem certeza?",
        text: "esse pedido será cancelado e essa operação será irreversível!",
        icon: "warning",
        buttons: ["cancelar", "tenho certeza"],
        dangerMode: true,
      })
          .then((willDelete) => {
            if (willDelete) {
              swal("solicitação de cancelamento feita com sucesso!", {
                icon: "success",
              });
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