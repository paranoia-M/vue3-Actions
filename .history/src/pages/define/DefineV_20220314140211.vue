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
  // 在绑定元素的attribute前调用，或事件监听器应用前调用
  created(el, binding, vnode, prevNode) {},
  // 在元素被插入到dom前调用
  beforeMount() {},
  // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
};
</script>

<style>
</style>