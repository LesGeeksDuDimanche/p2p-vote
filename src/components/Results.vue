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
import PieChart from './PieChart';

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
