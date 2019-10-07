<script>
import { Doughnut, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  mixins: [mixins],
}

export default {
  extends: Doughnut,
  props: ['chartData', 'chartOptions'],
  mixins: [reactiveProp],
  computed: {
    updateChartOptions() {
      return {
        ...chartOptions,
        ...this.chartOptions
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.updateChartOptions)
  }
}
</script>
