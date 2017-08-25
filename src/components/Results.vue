<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
    <h1>Results</h1>
    Total Votes {{totalVotes}}
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
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          // hopefully we don't need more than this many colors...
          backgroundColor: ["#ee4035", "#f37737", "#f9e97a", "#7ac043", "#9ed9f7"],
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
  computed: {
    totalVotes: function() {
      return this.chartData.reduce( ((sum, value) => sum + value) , 0);
    }
  },
  components: { PieChart }
}
</script>

<style>
</style>
