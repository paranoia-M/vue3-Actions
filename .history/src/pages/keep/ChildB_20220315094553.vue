<template>
  <div>
    <h3>子组件B:展示组件</h3>
    <div>我是子组件B的内容</div>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated } from "@vue/runtime-core";

onActivated(() => {
  console.log("组件B挂载");
});
onDeactivated(() => {
  console.log("组件B卸载");
});
</script>

<style>
</style>