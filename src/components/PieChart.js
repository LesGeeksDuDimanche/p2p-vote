import { Pie, mixins } from 'vue-chartjs';

export default Pie.extend({
  mixins: [mixins.reactiveProp],
  props: ['data', 'labels'],
  mounted () {
    // to see the reference for this look up at:
    // http://www.chartjs.org/docs/latest/charts/doughnut.html
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          // hopefully we don't need more than this many colors...
          backgroundColor: ["#721CC9", "#597700", "#f9e97a", "#7ac043", "#9ed9f7"],
          data: this.data
        }
      ]
    })
  }
});
