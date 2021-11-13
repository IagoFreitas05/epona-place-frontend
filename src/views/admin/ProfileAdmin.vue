<template>
  <AdminTemplate>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border bg-white border-gray-200 p-6 rounded-lg">
              <div
                  class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">aguardando envio</h2>
              <p class="leading-relaxed text-base">{{ andamento }}</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border  bg-white border-gray-200 p-6 rounded-lg">
              <div
                  class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path fill="none"
                        d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                  <path fill="none"
                        d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                  <path fill="none"
                        d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">enviados</h2>
              <p class="leading-relaxed text-base">{{ enviados }}</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border  bg-white border-gray-200 p-6 rounded-lg">
              <div
                  class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path fill="none"
                        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">recebidos</h2>
              <p class="leading-relaxed text-base">{{ recebidos }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class=" p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-2 mb-2">
      <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">período</h2>
      <form @submit.prevent="getAnalysisByPeriod" class="flex gap-2 ">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 w-10/12">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username">início do período </label>
            <input required v-model="startPeriod" id="username" type="date"
                   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300
                   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                   dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">fim do período</label>
            <input required v-model="endsPeriod" id="emailAddress" type="date"
                   class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md
                   dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                   dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>
        </div>

        <div class="  mt-12 w-2/12">
          <button
              type="submit"
              class="px-6 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md
              hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            pesquisar
          </button>
        </div>
      </form>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container  mx-auto">

        <div class="flex flex-wrap -m-4">
          <div class="w-full p-4">
            <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
              <h2 class="text-lg pb-2 font-semibold text-gray-700  dark:text-white">Gráfico de barras quantidade de vendas por período</h2>
              <testChart v-if="renderComponent" :firstChart="firstChart"></testChart>
            </div>
          </div>
          <div class="w-full p-4">
            <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
              <h2 class="text-lg pb-2 font-semibold text-gray-700  dark:text-white">Gráfico de linhas quantidade de vendas por período</h2>
              <lineChart v-if="renderComponent" :second-chart="firstChart"></lineChart>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container  mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="w-full p-4">
            <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
              <h2 class="text-lg pb-2 font-semibold text-gray-700  dark:text-white">Gráfico de linha por quantidade de vendas por período por produto</h2>
              <productLineChart v-if="renderComponent" :productData="productChartsPeriod"></productLineChart>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container  mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
              <h2 class="text-lg pb-2 font-semibold text-gray-700  dark:text-white">Gráfico de área produtos mais vendidos</h2>
              <productAreaChart v-if="renderComponent" :areaChart="productAreaChart"></productAreaChart>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="border bg-white shadow border-gray-200 p-6 rounded-lg">
              <h2 class="text-lg pb-2 font-semibold text-gray-700  dark:text-white">Gráfico de área categoria mais vendidas</h2>
              <categoryAreaChart v-if="renderComponent" :areaChart="areaChart"></categoryAreaChart>
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
import lineChart from "@/components/charts/lineChart";
import productLineChart from "@/components/charts/productLineChart";
import categoryAreaChart from "@/components/charts/categoryAreaChart";
import productAreaChart from "@/components/charts/productAreaChart";
import Cookie from "js-cookie";
import swal from "sweetalert";

export default {
  name: "ProfileAdmin",
  data() {
    return {
      renderComponent:true,
      startPeriod:'',
      endsPeriod:'',
      recebidos: '',
      enviados: '',
      andamento: '',
      firstChartData: [],
      firstChart: {
        chartData: [],
        chartLabel: [],
      },
      productChartDataPeriod: [],
      productChartsPeriod: {
        chartData: [],
        chartLabel: [],
        chartDataName: [],
        dataSet: [

        ],
        dataSetOut:[

        ]
      },
      areaChartPeriod: [],
      areaChart: {
        chartLabel: [],
        chartData: []
      },
      productAreaChartPeriod: [],
      productAreaChart: {
        chartLabel: [],
        chartData: []
      }
    }
  },
  components: {AdminTemplate, testChart, lineChart, categoryAreaChart, productLineChart, productAreaChart},
  methods: {
    forceReRender(){
      this.renderComponent = false;
      this.$nextTick(() => {
        // Add the component back in
        this.renderComponent = true;
      });
    },
    loadPedidoAndamento() {
      this.loading = true
      let url = `/returnQuantifiedByStatus/andamento`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.andamento = response.data
            this.loading = false;
          })
    },
    loadPedidoRecebidos() {
      this.loading = true
      let url = `/returnQuantifiedByStatus/recebido`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.recebidos = response.data
            this.loading = false;
          })
    },
    loadPedidoEnviados() {
      this.loading = true
      let url = `/returnQuantifiedByStatus/enviado`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.enviados = response.data
            this.loading = false;
          })
    },
    loadPurchaseQuantities() {
      this.loadPedidoAndamento()
      this.loadPedidoRecebidos()
      this.loadPedidoEnviados()
    },
    loadFirstChartData() {

      let url = `/returnOrdersByPeriod`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }

          })
          .then(response => {
            this.firstChartData = response.data
            for (let i = 0; i < this.firstChartData.length; i++) {
              this.firstChart.chartLabel[i] = this.firstChartData[i].data
              this.firstChart.chartData[i] = this.firstChartData[i].quantity
            }
          })
    },
    loadProductLineCharts() {
      let url = `/returnProductsByPeriod`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.productChartDataPeriod = response.data
            for (let i = 0; i < this.productChartDataPeriod.length; i++) {
              this.productChartsPeriod.chartLabel[i] = this.productChartDataPeriod[i].data
              this.productChartsPeriod.chartData.push( this.productChartDataPeriod[i].quantity)
              this.productChartsPeriod.chartDataName[i] = this.productChartDataPeriod[i].name

              this.productChartsPeriod.dataSet[i] = {
                label: this.productChartsPeriod.chartDataName[i],
                data: this.productChartsPeriod.chartData[i],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(201, 203, 207)',
                borderWidth: '3'
              }
            }

            const dataSet = this.productChartsPeriod.dataSet.reduce((obj, {label, data}) =>{
              if(!obj[label]) obj[label] = [];
              obj[label].push(data);
              return obj;
            }, {})

            const dataSetOut = Object.keys(dataSet).map(label =>{
              return{
                label,
                data:dataSet[label],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgb(201, 203, 207)',
                borderWidth: '3'
              }
            })
            this.forceReRender()
            this.productChartsPeriod.dataSetOut = dataSetOut;
        })
    },
    loadSalesByCategoryDTO() {
      let url = `/returnSalesByCategory`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.areaChartPeriod = response.data
            for (let i = 0; i < this.areaChartPeriod.length; i++) {
              this.areaChart.chartLabel[i] = this.areaChartPeriod[i].category;
              this.areaChart.chartData[i] = this.areaChartPeriod[i].quantity;
            }
          })
    },
    loadProductSaleQuantity() {
      let url = `/returnProductSaleQuantity`
      this.axios
          .request({
            url: url,
            method: 'GET',
            baseURL: 'http://localhost:8080/place/order',
            headers: {
              "Authorization": "Bearer  " + Cookie.get('token'),
              "Access-Control-Allow-Origin": '*',
              "Access-Control-Allow-Headers": "Origin, X-Request-Width, Content-Type, Accept",
            }
          })
          .then(response => {
            this.productAreaChartPeriod = response.data
            for (let i = 0; i < this.productAreaChartPeriod.length; i++) {
              this.productAreaChart.chartLabel[i] = this.productAreaChartPeriod[i].name;
              this.productAreaChart.chartData[i] = this.productAreaChartPeriod[i].quantity
            }
          })
    },
    getAnalysisByPeriod(){
      let config = {
        headers: {
          "Authorization": "Bearer " + Cookie.get('token'),
          "Content-type": "Application/json"
        }
      }
      this.axios.post("http://localhost:8080/place/order/getAnalysisByPeriod", {
        startPeriod: this.startPeriod,
        endsPeriod: this.endsPeriod
      }, config)
          .then((response) => {
            /* first chart data */
            this.firstChartData = []
            this.firstChart.chartLabel = []
            this.firstChart.chartData = []

            /*  productChartDataPeriod */
            this.productChartDataPeriod = []
            this.productChartsPeriod.chartData = []
            this.productChartsPeriod.chartLabel = []

            /* renderizando os gráficos a cada atualização*/
            this.forceReRender();

            this.firstChartData = response.data.purchaseOrderByPeriodDTO;
            for (let i = 0; i < this.firstChartData.length; i++) {
              this.firstChart.chartLabel[i] = this.firstChartData[i].data
              this.firstChart.chartData[i] = this.firstChartData[i].quantity
            }

            this.productChartDataPeriod = response.data.productsByPeriodDTO;
            for (let i = 0; i < this.productChartDataPeriod.length; i++) {
              this.productChartsPeriod.chartLabel[i] = this.productChartDataPeriod[i].data
              this.productChartsPeriod.chartData[i] = this.productChartDataPeriod[i].quantity
              this.productChartsPeriod.chartDataName[i] = this.productChartDataPeriod[i].name
            }

            swal("dados atualizados")
            response.data
          }).catch(() => {
        swal("Oops :(", "alguma coisa deu errado na sua requisição", "error")
      })
    }
  },
  created() {
    this.loadPurchaseQuantities()
    this.loadFirstChartData()
    this.loadProductLineCharts();
    this.loadSalesByCategoryDTO();
    this.loadProductSaleQuantity();
  }
}
</script>

<style scoped>
.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}
</style>