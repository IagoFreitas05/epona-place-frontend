<template>
  <LineChart :chartData="testData"/>
</template>

<script lang="ts">
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

import {defineComponent} from 'vue';
import {LineChart} from 'vue-chart-3';

export default defineComponent({
  name: 'lineChart',
  components: {LineChart},
  props:{
    secondChart:{}
  },
  setup(props) {
    const testData = {
      labels: props.secondChart.chartLabel,
      datasets: [{
        label: 'vendas por mês',
        data: props.secondChart.chartData,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 3
      }]
    };

    return {testData};
  }
});
</script>