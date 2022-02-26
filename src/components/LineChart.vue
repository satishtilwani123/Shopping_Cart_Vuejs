<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'LineChart',
  extends: Line,
  props: ['label', 'datas'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.label,
      datasets: [
        {
          label: 'Track Product',
          backgroundColor: '#f87979',
          data: this.datas
        }
      ]
    })
  }
})
</script>

<style lang="scss" scoped>

</style>