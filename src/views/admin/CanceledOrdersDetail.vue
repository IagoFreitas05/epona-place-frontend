<template>
  <div class="flex">
    <div class="mt-12 p-2 w-2/12 text-left " >
      <SideMenuAdmin></SideMenuAdmin>
    </div>
    <div class="mt-2 w-10/12 p-6 ">
      <div class="mt-6 mb-5 ">
        <h4 class="font-bold p-4 items-center content-center text-center justify-between rounded text-xl
            text-purple-300 bg-purple-600 grid grid-cols-3
          ">pedido número: #{{id}}
          <span>status: {{ order.status }}</span>
          <button  class="border border-purple-300
            rounded hover:border-white
              hover:text-white w-1/2 "> <p v-if="order.status === 'cancelado'">pedido cancelado</p> <p   v-else>declarar envio</p></button>
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
import SideMenuAdmin from "@/components/menu/SideMenuAdmin";
import ProductOrderDetail from "@/components/store/ProductOrderDetail";
export default {
  name: "CanceledOrdersDetail",
  components: {ProductOrderDetail, SideMenuAdmin},
  data(){
    return{
      order:{id:"3103",date:"28/01/2019", idUser:"1",idManager:"12", paymentType:'cartão de crédito', totalValue:'200', status:'cancelado'},
      id :  this.$route.params.id,
      products:[
        {id:"1",
          value:"200",
          name:"jordan",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80",
          qty:'1',
          status:''
        },
        {id:"2",
          value:"100",
          name:"corrida",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          qty:'2',
          status:''
        },
        {id:"3",
          value:"100",
          name:"corrida",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          qty:'4',
          staus:'',
        },
        {id:"4",
          value:"100",
          name:"corrida",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          qty:'1',
          status:''
        },
        {id:"5",
          value:"100",
          name:"corrida",
          category:"corrida",
          img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" ,
          qty:'1',
          status:''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>