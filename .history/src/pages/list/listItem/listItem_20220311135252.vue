<template>
  <div>
    <h2>子组件</h2>
    {{ title }}
    <button @click="$emit('changeColor')">改变颜色</button>
    <slot class="slot"></slot>
  </div>
</template>

<script setup>
defineProps(["title"]);
console.log($attrs);
</script>

<style>
</style>