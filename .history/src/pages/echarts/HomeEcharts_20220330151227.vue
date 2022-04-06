<template>
  <div class="echarts-box">
    <div id="myEcharts" class="echarts-box-item"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";

let echart = echarts;
onMounted(() => {
  initChart();
});
//
onUnmounted(() => {
  echart.dispose;
});

const initChart = () => {
  let chart = 
};
</script>

<style scoped>
.echarts-box-item {
  width: 100%;
  height: 100%;
}
</style>