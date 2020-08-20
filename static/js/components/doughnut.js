export default {
  extends: VueChartJs.Doughnut,
  name: "doughnut",
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
