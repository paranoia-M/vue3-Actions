<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" v-focus />
  </div>
</template>

<script setup>
const vFocus = {
  mounted: (el) => el.focus(),
};
</script>

<style>
</style>