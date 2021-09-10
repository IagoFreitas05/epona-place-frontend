<template>
  <div class="flex">
    <div class="mt-12 p-2 w-2/12 text-left " >
      <SideMenuAdmin></SideMenuAdmin>
    </div>
    <div class="mt-8 w-10/12">
      <h4 class="p-4 font-bold text-xl text-purple-600">
        menu administrativo
      </h4>
    </div>
  </div>
</template>

<script>
import SideMenuAdmin from "@/components/menu/SideMenuAdmin";
export default {
  name: "ProfileAdmin",
  components: {SideMenuAdmin},

}
</script>

<style scoped>

</style>