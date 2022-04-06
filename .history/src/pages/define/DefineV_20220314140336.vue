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
  created(el, binding, vnode, prevNode) {
    /* 
    el：指令绑定到的元素。这可以用于直接操作 DOM。
    binding：一个对象，包含以下属性
    */
  },
  // 在元素被插入到dom前调用
  beforeMount() {},
  // 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
  mounted() {},
  // 绑定元素的父组件更新前调用
  beforeUpdate() {},
  // 在绑定元素的父组件
  // 及他自己的所有子节点都 更新 完成后调用
  updated() {},
  // 绑定元素的父组件卸载之前调用
  beforeUnmount() {},
  // 绑定元素的父组件卸载之后调用
  unmounted() {},
};
</script>

<style>
</style>