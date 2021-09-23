<template>
  <div class="flex">
    <div class="mt-12 p-2 w-2/12 text-left " >
      <SideMenuAdmin></SideMenuAdmin>
    </div>
    <div class="mt-12 w-10/12 p-6 ">
      <div @click="seeOrderDetail(item.id)" class=" shadow bg-gradient-to-r from-purple-600 to-purple-800
        grid grid-cols-4 justify-between
          mt-6 p-4 cursor-pointer
            rounded font-sans text-white " v-for="item in orders" :key="item.id">
        <p>pedido: <span class="font-bold">#{{item.id}}</span> </p>
        <p>data: <span class="font-bold">{{item.date}}</span> </p>
        <p>pago com: <span class="font-bold">{{item.paymentType}}</span> </p>
        <p>total: <span class="font-bold">R$ {{item.totalValue}}</span> </p>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenuAdmin from "@/components/menu/SideMenuAdmin";
export default {
  name: "Orders",
  components: {SideMenuAdmin},
  data(){
    return{
      orders:[
        {id:"3103",date:"28/01/2019", idUser:"1",idManager:"12", paymentType:'cartão de crédito', totalValue:'200', status:'aguardando envio'},
        {id:"3104",date:"28/01/2020", idUser:"1",idManager:"12", paymentType: 'cupom', totalValue: '330' , status:'aguardando envio'},
        {id:"3105",date:"28/01/2021", idUser:"1",idManager:"12", paymentType: 'cartão de crédito', totalValue: '299' , status:'aguardando envio'},
      ]
    }
  },
  methods:{
    seeOrderDetail(id){
      this.$router.push(`/ordersDetail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>