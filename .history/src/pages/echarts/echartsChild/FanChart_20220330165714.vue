<template>
  <div>
    <div class="echarts-box">
      <div id="myEchartsFan" :style="{ width: '300px', height: '300px' }"></div>
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
  let chart = echart.init(document.querySelector("#myEchartsFan"), "light");
  chart.setOption({
    title: {
      text: "饼图标题",
      subtext: "饼图副标题",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   orient: "vertical",
    //   left: "left",
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  });
};
</script>

<style>
</style>