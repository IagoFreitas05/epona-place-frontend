<template>
  <LineChart :chartData="testData" />
</template>

<script lang="ts">
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { defineComponent } from 'vue';
import { LineChart } from 'vue-chart-3';
export default defineComponent({
  name: 'productLineChart',
  components: { LineChart },
  props:{
    productData:{
    }
  },
  setup(props) {
    const testData = {
      labels:props.productData.chartLabel,
      datasets: props.productData.dataSetOut
    };
    return { testData };
  },
});
</script>