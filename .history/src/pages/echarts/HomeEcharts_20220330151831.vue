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
  let chart = echart.init(document.getElementById("myEcharts"), dark);
  chart.setOption({
    xAix: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
    },
    tooltip: {
      trigger: "axis",
    },
    yAix: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 230, 4321, 4129],
        type: "line",
      },
    ],
  });

  window.onresize = function () {
    chart.resize();
  };
};
</script>

<style scoped>
.echarts-box-item {
  width: 100%;
  height: 100%;
}
</style>