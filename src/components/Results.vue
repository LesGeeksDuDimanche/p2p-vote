<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Results</h1>
    <div style="width: 250px;">
      <pie-chart :data="chartData" :labels="chartLabels"></pie-chart>
    </div>
  </div>
</template>

<script>
import { Pie, mixins } from 'vue-chartjs'

const PieChart = Pie.extend({
  mixins: [mixins.reactiveProp],
  props: ['data', 'labels'],
  mounted () {
    debugger;
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          // hopefully we don't need more than this many colors...
          backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
          data: this.data
        }
      ]
    })
  }
});

export default {
  data () {
    return {
      chartData: [50, 50],
      chartLabels: ['A', 'B']
    }
  },
  components: { PieChart }
}
</script>

<style>
</style>
