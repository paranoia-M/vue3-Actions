<template>
  <div class="scatter-box">
    <div
      id="myEchartsScatter"
      :style="{ width: '400px', height: '300px' }"
    ></div>
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
  let chart = echart.init(document.querySelector("#myEchartsScatter"), "light");
  chart.setOption({
    xAxis: {},
    yAxis: {},
    series: [{}],
  });
};
</script>

<style>
</style>