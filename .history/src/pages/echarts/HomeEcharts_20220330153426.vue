<template>
  <div>
    <el-card class="charts">
      <line-chart></line-chart>
    </el-card>
  </div>
</template>

<script setup>
import LineChart from "./echartsChild/LineChart.vue";
</script>

<style scoped>
.charts {
  width: 25%;
  height: 300px;
}
</style>