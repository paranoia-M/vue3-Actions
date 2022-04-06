<template>
  <div>
    <div class="charts">
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script setup>
import LineChart from "./echartsChild/LineChart.vue";
</script>

<style scoped>
.charts {
  display: block;
  margin: 0 auto;
}
</style>