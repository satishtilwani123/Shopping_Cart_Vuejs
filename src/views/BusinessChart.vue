<template>
    <div class="line">
        <LineChart :label="getProductsName" :datas="getProductsQuantity" />
    </div>
    <div class="pie">
        <PieChart :label="getProductsName" :datas="getProductsQuantity" />
    </div>
    <div class="bubble">
        <BubbleChart :label="getProductsName" :datas="getProductsQuantity" />
    </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import PieChart from '../components/PieChart.vue'
import BubbleChart from '../components/BubbleCart.vue'
import { mapGetters } from "vuex"

export default {
    name: 'BusinessChart',
    computed:{
        ...mapGetters(['getProductsName', 'getProductsQuantity'])
    },
    components: {
        LineChart,
        PieChart,
        BubbleChart,
    }
}
</script>

<style scoped>
.line {
    width: 600px;
    height: 500px;
  }
.pie {
    width: 600px;
    height: 500px;
    margin-top: 10%;
  }
  .bubble {
    width: 600px;
    height: 500px;
    margin-top: 10%;
  }
</style>