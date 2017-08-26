<template>
  <!-- if you want automatic padding use "layout-padding" class -->
  <div class="layout-padding">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <h1 style="color:#013D4E"><i>Who runs the world?</i></h1>
    <h3 style="color:gray"><i>Results</i></h3>
    <br><br>
    <div class="row">
      <div class="col-md-5 text-center">
        <span style="font-size:2rem">Total Votes {{totalVotes}}</span>
        <br><br>
        <img class="img-responsive" src="https://media.giphy.com/media/9coDSVK5qgxkA/giphy.gif">
        <br><br>
        <!-- <img class="img-" width="199rem" src="https://media.giphy.com/media/71PLYtZUiPRg4/giphy.gif"> -->
        </div>
          <!-- <div style="width: 250px;"> -->
      <div class="col-md-7">
        <pie-chart :data="chartData" :labels="chartLabels">
          
        </pie-chart>
      </div>
    </div>
</div>

</template>

<script>
import PieChart from './PieChart';

export default {
  data () {
    return {
      chartData: [7630, 3423],
      chartLabels: [ 'Beyonce','Cats']
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
