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
  // 在绑定元素的attribute前调用，或事件监听器
  created(el, binding, vnode, prevNode) {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>

<style>
</style>