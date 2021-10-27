<template>
  <AdminTemplate>
    <section class="text-gray-600 body-font">
    <div class="container  mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
            <testChart></testChart>
          </div>
        </div>
        <div class="xl:w-1/2 md:w-1/2 p-4">
          <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
         <testChart></testChart>
          </div>
        </div>

      </div>
    </div>
    </section>

  </AdminTemplate>
</template>

<script>
import AdminTemplate from "@/views/templates/AdminTemplate";
import testChart from "@/components/charts/testChart";
export default {
  name: "ProfileAdmin",
  components: {AdminTemplate, testChart},
  methods:{

  },
  created() {

  }
}
</script>

<style scoped>

</style>