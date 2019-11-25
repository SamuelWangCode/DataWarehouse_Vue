<template>
    <div class="chart">
        <chart :options='orgOptions' />
    </div>
</template>
<script>
export default {
    name:'tryEcharts',
    data () {
    return {
      orgOptions: {},
    }
  },
  mounted() {
    this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }
  }
}

</script>
<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
.chart{
    width: 600px;
    height: 400px;
}
</style>