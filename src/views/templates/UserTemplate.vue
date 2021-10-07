<template>
  <div class="flex">
    <div class="mt-12 p-2 w-2/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-10/12 p-6 ">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import SideMenuUser from "@/components/menu/SideMenuUser";
export default {
  components:{SideMenuUser},
  name: "UserTemplate"
}
</script>

