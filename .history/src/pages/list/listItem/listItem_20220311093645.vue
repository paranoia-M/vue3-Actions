<template>
  <div>
    <h2>子组件</h2>
    {{title}}
    <button>改变颜色</button>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style>
</style>