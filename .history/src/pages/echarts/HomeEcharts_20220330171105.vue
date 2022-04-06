<template>
  <div>
    <p class="title-chart">可视化数据</p>
    <div class="charts">
      <div class="line-chart">
        <el-card>
          <line-chart></line-chart>
        </el-card>
      </div>

      <div class="fan-chart">
        <el-card>
          <fan-chart></fan-chart>
        </el-card>
      </div>

      <div class="scatter-chart">
        <el-card>
          <scatter-chart></scatter-chart>
        </el-card>
      </div>
      <div class="columnar-chart">柱状图</div>
      <div class="map-chart">地图</div>
      <div class="relation-chart">关系图</div>
    </div>
  </div>
</template>

<script setup>
import LineChart from "./echartsChild/LineChart.vue";
import FanChart from "./echartsChild/FanChart.vue";
import ScatterChart from "./echartsChild/ScatterChart.vue";
</script>

<style scoped lang = "scss">
.title-chart {
  font-size: 24px;
  text-align: center;
}
.charts {
  display: flex;
  flex-wrap: wrap;
  .columnar-chart {
    width: 300px;
  }
}
</style>