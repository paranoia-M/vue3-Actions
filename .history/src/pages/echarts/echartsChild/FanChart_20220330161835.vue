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
</script>

<style>
</style>