<template>
  <BarChart :chartData="testData" />
</template>

<script lang="ts">
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import {defineComponent} from 'vue';
import { BarChart } from 'vue-chart-3';
export default defineComponent({
  name: 'testChart',
  props: {
    firstChart: {}
  },
  data(){
    return{
      chartData:[],
      chartLabels:[],
      chartDataLabels:[]
    }
  },
  components: { BarChart },
  methods:{

  },
  setup(props) {
    const testData = {
      labels: props.firstChart.chartLabel,
      datasets: [{
        label: 'vendas por período',
        data:  props.firstChart.chartData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 3
      }]
    };

    return { testData };
  },
  beforeMount() {
  }
});
</script>
