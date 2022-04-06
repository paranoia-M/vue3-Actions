<template>
  <div>
    <h3>子组件B:展示组件</h3>
    <div>我是子组件B的内容</div>
  </div>
</template>

<script setup>
/***
 *
 *<Teleport> 是一个内置组件，使我们可以将一个组件的一部分模板“传送”到该组件的 DOM 层次结构之外的 DOM 节点中。
 */
import { onActivated, onDeactivated, ref } from "@vue/runtime-core";

const open = ref(true);

onActivated(() => {
  console.log("组件B挂载");
});
onDeactivated(() => {
  console.log("组件B卸载");
});
</script>

<style>
</style>