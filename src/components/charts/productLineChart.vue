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
      labels:props.productData.chartLabel ,
      datasets:
      [
        {
          label: props.productData.chartDataName,
          data: props.productData.chartData,
          backgroundColor: 'rgba(153, 102, 255, 0.2)'
          ,
          borderColor:
            'rgb(201, 203, 207)'
          ,
          borderWidth: 3
        }
      ]
    };
    return { testData };
  },
});
</script>