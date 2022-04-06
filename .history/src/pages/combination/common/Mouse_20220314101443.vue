<template>
  <div>
    <p>可组合函数，鼠标跟踪功能 {{ x }},{{ y }}</p>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

const x = ref(0);
const y = ref(0);

const useMouse = (event) => {
  x.value = event.pageX;
  y.value = event.pageY;
};
onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => window.removeEventListener("mousemove", update));

return { x, y };
</script>

<style>
</style>
