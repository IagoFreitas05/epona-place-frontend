<template>
  <div class="flex w-12/12">
    <div class="mt-8  w-2.5/12 text-left " >
      <SideMenuAdmin></SideMenuAdmin>
    </div>
    <div class="mt-2 w-11/12 p-6  ">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SideMenuAdmin from "@/components/menu/TesteMenuAdmin";
export default {
  name: "AdminTemplate",
  components:{SideMenuAdmin}
}
</script>

<style scoped>

</style>