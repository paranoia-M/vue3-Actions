<template>
  <div>
    <h2>子组件</h2>
    {{ title }}
    {{ $attrs }}
    <button @click="$emit('changeColor')">改变颜色</button>
    <slot class="slot"></slot>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>

<style>
</style>