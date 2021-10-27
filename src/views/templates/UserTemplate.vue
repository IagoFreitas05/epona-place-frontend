<template>
  <div class="flex w-12/12">
    <div class="mt-8  w-2.5/12 text-left " >
      <SideMenuUser></SideMenuUser>
    </div>
    <div class="mt-2 w-11/12 p-6  ">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import SideMenuUser from "@/components/menu/TesteMenu";
export default {
  components:{SideMenuUser},
  name: "UserTemplate"
}
</script>

