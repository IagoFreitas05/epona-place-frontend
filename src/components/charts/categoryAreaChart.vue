<template>
  <DoughnutChart :chartData="testData"/>
</template>

<script lang="ts">
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

import {defineComponent} from 'vue';
import {DoughnutChart} from 'vue-chart-3';

export default defineComponent({
  name: 'categoryAreaChart',
  components: {DoughnutChart},
  props:{
    areaChart:{}
  },
  setup(props) {
    const testData = {
      labels: props.areaChart.chartLabel,
      datasets: [{
        label: 'vendas por categoria',
        data: props.areaChart.chartData,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    return {testData};
  }
});
</script>


<style scoped>

</style>