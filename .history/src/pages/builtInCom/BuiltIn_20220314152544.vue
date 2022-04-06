<template>
  <div>
    <h1>vue内置组件</h1>
    <button @click="isTrue = !isTrue">转换</button>
    <Transition>
      <p v-if="isTrue">hello</p>
    </Transition>
  </div>
</template>

<script setup>
/**
 * vue提供了两个内置组件
 *<Transition> 会在一个元素或组件进入和离开 DOM 时应用动画
 *
 * 它可以在一般元素以及通过默认插槽传递的组件上应用进入和离开动画。进入或离开可以由以下其中一种触发：
 * v-if 所带来的条件渲染
 * v-show 所带来的条件显示
 * 由特殊元素 <component> 切换的动态组件
 */
</script>

<style>
</style>