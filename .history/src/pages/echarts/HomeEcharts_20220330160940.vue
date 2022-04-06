<template>
  <el-card class="charts">
    <p class="title-chart">可视化数据</p>
    <div class="line-chart">折线图</div>
    <div class="fan-chart">扇形图</div>
    <div class="scatter-chart">散点图</div>
    <div class="columnar-chart">柱状图</div>
    <div class="map-chart">地图</div>
    <div class="relation-chart">关系图</div>
  </el-card>
</template>

<script setup>
import LineChart from "./echartsChild/LineChart.vue";
</script>

<style scoped lang = "scss">
.charts {
  background-color: lightblue;

  .title-chart {
    font-size: 24px;
    text-align: center;
  }
  .line-chart {
    width: 400px;
    height: 300px;
  }
}
</style>