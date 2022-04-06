<template>
  <div>
    <div class="echarts-box">
      <div id="myEcharts" :style="{ width: '300px', height: '300px' }"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "@vue/runtime-core";
import * as echarts from "echarts";

let echart = echarts;
onMounted(() => {
  initChart();
  console.log("aa");
});

onUnmounted(() => {
  echart.dispose;
});

const initChart = () => {
  let chart = echart.init(document.querySelector("#myEcharts"), "light");
  chart.setOption({
    title: {},
    tooltip: {},
    legend: {},
    series: {},
  });
};
</script>

<style>
</style>