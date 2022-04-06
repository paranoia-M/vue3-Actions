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
// 指令钩子
const myDirective = {
  created(el, binding, vnode, prevNode) {},
  beforeMount() {},
};
</script>

<style>
</style>