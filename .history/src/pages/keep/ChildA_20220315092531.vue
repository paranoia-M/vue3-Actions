<template>
  <div>
    <h3>子组件A: 计数器{{ num }}</h3>
    <button @click="handleCalculate">计算</button>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const num = ref(0);
const handleCalculate = () => {
  num.value++;
};
</script>

<style>
</style>